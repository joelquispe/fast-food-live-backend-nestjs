import { CartItemOptionRespDto } from '@/modules/cart-items/dtos/cart_item_option_resp.dto';
import { CartItemOptionsEntity } from '@/modules/cart-items/entities';
import { OptionValueService } from '@/modules/option-value/services/option-value/option-value.service';
import { OptionService } from '@/modules/option/services/option.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartItemsUtilsService {
  constructor(
    private readonly optionService: OptionService,
    private readonly optionValueService: OptionValueService,
  ) {}

  async formattedOptions(
    itemOptions: CartItemOptionsEntity[],
  ): Promise<CartItemOptionRespDto[]> {
    const optionsWithDetails = await Promise.all(
      itemOptions.map(async (option) => {
        const findOption = await this.optionService.findById(option.optionsId);

        const optionsValues = await Promise.all(
          option.cartItemOptionsValues.map(async (value) => {
            const findOptionValue = await this.optionValueService.findById(
              value.optionValueId,
            );
            return {
              id: value.id,
              name: findOptionValue.name,
              price: findOptionValue.price,
              quantity: value.quantity,
            };
          }),
        );

        return {
          id: option.id,
          name: findOption.title,
          optionsValues,
        };
      }),
    );
    return optionsWithDetails;
  }
}
