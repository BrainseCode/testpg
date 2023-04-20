/*
------------------------------------------------------------------------------ 
This code was generated by YSsystems. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.yssystems.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerCreateNestedManyWithoutAddressesInput {
  @Field(() => [CustomerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerWhereUniqueInput],
  })
  connect?: Array<CustomerWhereUniqueInput>;
}

export { CustomerCreateNestedManyWithoutAddressesInput as CustomerCreateNestedManyWithoutAddressesInput };