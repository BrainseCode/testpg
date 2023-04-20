/*
------------------------------------------------------------------------------ 
This code was generated by YSsystems. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.yssystems.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressUpdateInput } from "./AddressUpdateInput";

@ArgsType()
class UpdateAddressArgs {
  @Field(() => AddressWhereUniqueInput, { nullable: false })
  where!: AddressWhereUniqueInput;
  @Field(() => AddressUpdateInput, { nullable: false })
  data!: AddressUpdateInput;
}

export { UpdateAddressArgs as UpdateAddressArgs };
