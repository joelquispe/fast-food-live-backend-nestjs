import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

@Injectable()
export class EncryptionService {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}
  encrypt(data: string): string {
    const iv = randomBytes(16);

    const cipher = createCipheriv(
      'aes-256-ctr',
      this.configService.get('encryption_key'),
      iv,
    );

    const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);
    return `${iv.toString('hex')}:${encryptedText.toString('hex')}`;
  }

  decrypt(data: string): string {
    const [iv, encriptedText] = data.split(':');
    const ivBuffer = Buffer.from(iv, 'hex');

    const decipher = createDecipheriv(
      'aes-256-ctr',
      this.configService.get('encryption_key'),
      ivBuffer,
    );

    const decryptedText = Buffer.concat([
      decipher.update(Buffer.from(encriptedText, 'hex')),
      decipher.final(),
    ]);
    return decryptedText.toString();
  }
}
