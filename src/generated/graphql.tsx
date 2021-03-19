import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A set. */
  Set: any;
  /** Time is a scalar value that represents an ISO8601 formatted time. */
  Time: any;
  /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
  Country: any;
  /** Represents a currency. Currencies are identified by their [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes. */
  Currency: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date. */
  Date: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** A key that references a resource. */
  KeyReferenceInput: any;
  /** Locale is a scalar value represented as a string language tag. */
  Locale: any;
  /** Search filter. It is represented as a string and has th same format as in REST API: "field:filter_criteria" */
  SearchFilter: any;
  /** Search sort */
  SearchSort: any;
  /** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
  YearMonth: any;
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** API Clients can be used to obtain OAuth 2 access tokens. The secret is only shown once in the response of creating the API Client. */
export type ApiClientWithSecret = {
  id: Scalars['String'];
  name: Scalars['String'];
  scope: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  lastUsedAt?: Maybe<Scalars['Date']>;
  secret: Scalars['String'];
};

export type AwsLambdaDestination = ExtensionDestination & {
  arn: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  type: Scalars['String'];
};

export type AwsLambdaDestinationInput = {
  arn: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
};

export type AbsoluteDiscountValue = CartDiscountValue & ProductDiscountValue & {
  money: Array<Money>;
  type: Scalars['String'];
};

export type AbsoluteDiscountValueInput = {
  money: Array<MoneyInput>;
};

export type AddCartCustomLineItem = {
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
  custom?: Maybe<CustomFieldsDraft>;
  quantity?: Maybe<Scalars['Long']>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  slug: Scalars['String'];
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
};

export type AddCartDiscountCode = {
  code: Scalars['String'];
  validateDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AddCartItemShippingAddress = {
  address: AddressInput;
};

export type AddCartLineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  custom?: Maybe<CustomFieldsDraft>;
  catalog?: Maybe<ReferenceInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  variantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Long']>;
  sku?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type AddCartPayment = {
  payment: ResourceIdentifierInput;
};

export type AddCartShoppingList = {
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
};

export type AddCategoryAsset = {
  position?: Maybe<Scalars['Int']>;
  asset: AssetDraftInput;
};

export type AddChannelRoles = {
  roles: Array<ChannelRole>;
};

export type AddCustomerAddress = {
  address: AddressInput;
};

export type AddCustomerBillingAddressId = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type AddCustomerShippingAddressId = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type AddCustomerStore = {
  store: ResourceIdentifierInput;
};

export type AddInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type AddMyCartLineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
  custom?: Maybe<CustomFieldsDraft>;
  catalog?: Maybe<ReferenceInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  variantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Long']>;
  sku?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type AddMyPaymentTransaction = {
  transaction: MyTransactionDraft;
};

export type AddOrderDelivery = {
  items?: Maybe<Array<DeliveryItemDraftType>>;
  parcels?: Maybe<Array<DeliveryItemDraftType>>;
  address?: Maybe<AddressInput>;
};

export type AddOrderEditStagedAction = {
  stagedAction: StagedOrderUpdateAction;
};

export type AddOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddOrderParcelToDelivery = {
  deliveryId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurementsDraftType>;
  trackingData?: Maybe<TrackingDataDraftType>;
  items?: Maybe<Array<DeliveryItemDraftType>>;
};

export type AddOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
};

export type AddPaymentInterfaceInteraction = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type AddPaymentTransaction = {
  transaction: TransactionDraft;
};

export type AddProductAsset = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
  asset: AssetDraftInput;
};

export type AddProductExternalImage = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  image: ImageInput;
  staged?: Maybe<Scalars['Boolean']>;
};

export type AddProductPrice = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  price: ProductPriceDataInput;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type AddProductToCategory = {
  category: ResourceIdentifierInput;
  orderHint?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type AddProductVariant = {
  assets?: Maybe<Array<AssetDraftInput>>;
  attributes?: Maybe<Array<ProductAttributeInput>>;
  images?: Maybe<Array<ImageInput>>;
  prices?: Maybe<Array<ProductPriceDataInput>>;
  key?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type AddShippingMethodShippingRate = {
  zone: ResourceIdentifierInput;
  shippingRate: ShippingRateDraft;
};

export type AddShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type AddShoppingListLineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<CustomFieldsDraft>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type AddShoppingListTextLineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<CustomFieldsDraft>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
};

export type AddStagedOrderCustomLineItem = {
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
  custom?: Maybe<CustomFieldsDraft>;
  quantity?: Maybe<Scalars['Long']>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  slug: Scalars['String'];
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
};

export type AddStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  draft: CustomLineItemDraftOutput;
};

export type AddStagedOrderDelivery = {
  items?: Maybe<Array<DeliveryItemDraftType>>;
  parcels?: Maybe<Array<DeliveryItemDraftType>>;
  address?: Maybe<AddressInput>;
};

export type AddStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  items: Array<DeliveryItem>;
  parcels: Array<ParcelData>;
  address?: Maybe<AddressDraft>;
};

export type AddStagedOrderDiscountCode = {
  code: Scalars['String'];
  validateDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AddStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  code: Scalars['String'];
  validateDuplicates: Scalars['Boolean'];
};

export type AddStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address: AddressDraft;
};

export type AddStagedOrderLineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  custom?: Maybe<CustomFieldsDraft>;
  catalog?: Maybe<ReferenceInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  variantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Long']>;
  sku?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type AddStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  draft: LineItemDraftOutput;
};

export type AddStagedOrderParcelToDelivery = {
  deliveryId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurementsDraftType>;
  trackingData?: Maybe<TrackingDataDraftType>;
  items?: Maybe<Array<DeliveryItemDraftType>>;
};

export type AddStagedOrderParcelToDeliveryOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
  items: Array<DeliveryItem>;
};

export type AddStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  paymentResId: ResourceIdentifier;
};

export type AddStagedOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
};

export type AddStagedOrderReturnInfoOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  items: Array<ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
};

export type AddStagedOrderShoppingList = {
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
};

export type AddStagedOrderShoppingListOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  shoppingListResId: ResourceIdentifier;
  supplyChannelResId?: Maybe<ChannelReferenceIdentifier>;
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
};

export type AddStateRoles = {
  roles: Array<StateRole>;
};

export type AddStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type AddStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type AddTypeEnumValue = {
  fieldName: Scalars['String'];
  value: EnumValueInput;
};

export type AddTypeFieldDefinition = {
  fieldDefinition: FieldDefinitionInput;
};

export type AddTypeLocalizedEnumValue = {
  fieldName: Scalars['String'];
  value: LocalizedEnumValueInput;
};

export type AddZoneLocation = {
  location: ZoneLocation;
};

export type AddressDraft = {
  id?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country: Scalars['Country'];
  company?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  pOBox?: Maybe<Scalars['String']>;
  /** @deprecated Field 'contactInfo' is deprecated. Instead of using e.g. 'contactInfo.email' use 'email' directly. */
  contactInfo: AddressContactInfo;
  additionalAddressInfo?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsCommand>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country: Scalars['Country'];
  company?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  pOBox?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  additionalAddressInfo?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsDraft>;
};

export enum AnonymousCartSignInMode {
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  UseAsNewActiveCustomerCart = 'UseAsNewActiveCustomerCart',
  /**
   * `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the customer’s cart (same product ID and variant ID), the maximum quantity of both LineItems is used as the new quantity. In that case `CustomFields` on the `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */
  MergeWithExistingCustomerCart = 'MergeWithExistingCustomerCart'
}

export type Applied = OrderEditResult & {
  appliedAt: Scalars['DateTime'];
  excerptBeforeEdit: OrderExcerpt;
  excerptAfterEdit: OrderExcerpt;
  type: Scalars['String'];
};

export type ApplyCartDeltaToCustomLineItemShippingDetailsTargets = {
  customLineItemId: Scalars['String'];
  targetsDelta: Array<ShippingTargetDraft>;
};

export type ApplyCartDeltaToLineItemShippingDetailsTargets = {
  lineItemId: Scalars['String'];
  targetsDelta: Array<ShippingTargetDraft>;
};

export type AssetDimensionsInput = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type AssetDraftInput = {
  key?: Maybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  custom?: Maybe<CustomFieldsDraft>;
  sources?: Maybe<Array<AssetSourceInput>>;
  tags?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<ResourceIdentifierInput>;
};

export type AssetSourceInput = {
  uri: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  dimensions?: Maybe<AssetDimensionsInput>;
  contentType?: Maybe<Scalars['String']>;
};

export type Attribute = {
  name: Scalars['String'];
};

export type AttributeDefinitionDraft = {
  type: AttributeTypeDraft;
  name: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
  isRequired: Scalars['Boolean'];
  attributeConstraint?: Maybe<AttributeConstraint>;
  inputTip?: Maybe<Array<LocalizedStringItemInputType>>;
  inputHint?: Maybe<TextInputHint>;
  isSearchable: Scalars['Boolean'];
};

export type AttributeSetElementTypeDraft = {
  text?: Maybe<SimpleAttributeTypeDraft>;
  number?: Maybe<SimpleAttributeTypeDraft>;
  money?: Maybe<SimpleAttributeTypeDraft>;
  date?: Maybe<SimpleAttributeTypeDraft>;
  time?: Maybe<SimpleAttributeTypeDraft>;
  datetime?: Maybe<SimpleAttributeTypeDraft>;
  boolean?: Maybe<SimpleAttributeTypeDraft>;
  reference?: Maybe<ReferenceTypeDefinitionDraft>;
  enum?: Maybe<EnumTypeDraft>;
  lenum?: Maybe<LocalizableEnumTypeDraft>;
  ltext?: Maybe<SimpleAttributeTypeDraft>;
};

export type AttributeSetTypeDraft = {
  elementType: AttributeSetElementTypeDraft;
};

export type AttributeTypeDraft = {
  set?: Maybe<AttributeSetTypeDraft>;
  text?: Maybe<SimpleAttributeTypeDraft>;
  number?: Maybe<SimpleAttributeTypeDraft>;
  money?: Maybe<SimpleAttributeTypeDraft>;
  date?: Maybe<SimpleAttributeTypeDraft>;
  time?: Maybe<SimpleAttributeTypeDraft>;
  datetime?: Maybe<SimpleAttributeTypeDraft>;
  boolean?: Maybe<SimpleAttributeTypeDraft>;
  reference?: Maybe<ReferenceTypeDefinitionDraft>;
  enum?: Maybe<EnumTypeDraft>;
  lenum?: Maybe<LocalizableEnumTypeDraft>;
  ltext?: Maybe<SimpleAttributeTypeDraft>;
};

export type AuthorizationHeader = HttpDestinationAuthentication & {
  headerValue: Scalars['String'];
  type: Scalars['String'];
};

export type AuthorizationHeaderInput = {
  headerValue: Scalars['String'];
};

export type AzureFunctionsAuthentication = HttpDestinationAuthentication & {
  key: Scalars['String'];
  type: Scalars['String'];
};

export type AzureFunctionsAuthenticationInput = {
  key: Scalars['String'];
};

export type AzureServiceBusDestination = Destination & {
  connectionString: Scalars['String'];
  type: Scalars['String'];
};

export type AzureServiceBusDestinationInput = {
  connectionString: Scalars['String'];
};

export type BaseMoneyInput = {
  centPrecision?: Maybe<MoneyInput>;
  highPrecision?: Maybe<HighPrecisionMoneyInput>;
};

export type BaseSearchKeywordInput = {
  whitespace?: Maybe<WhitespaceSuggestTokenizerInput>;
  custom?: Maybe<CustomSuggestTokenizerInput>;
};

export type BooleanAttribute = Attribute & {
  value: Scalars['Boolean'];
  name: Scalars['String'];
};

export type BooleanField = CustomField & {
  value: Scalars['Boolean'];
  name: Scalars['String'];
};

export type BooleanType = FieldType & {
  name: Scalars['String'];
};

export type CartClassificationInput = {
  values: Array<LocalizedEnumValueInput>;
};

export type CartClassificationType = ShippingRateInputType & {
  values: Array<ShippingRateInputLocalizedEnumValue>;
  type: Scalars['String'];
};

export type CartCreated = MessagePayload & {
  totalPrice: Money;
  lineItemCount: Scalars['Int'];
  discountCodesRefs: Array<Reference>;
  type: Scalars['String'];
};

export type CartDiscountDraft = {
  value: CartDiscountValueInput;
  cartPredicate: Scalars['String'];
  target?: Maybe<CartDiscountTargetInput>;
  sortOrder: Scalars['String'];
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  stackingMode?: Maybe<StackingMode>;
  requiresDiscountCode?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  custom?: Maybe<CustomFieldsDraft>;
  key?: Maybe<Scalars['String']>;
};

export type CartDiscountTargetInput = {
  lineItems?: Maybe<LineItemsTargetInput>;
  customLineItems?: Maybe<CustomLineItemsTargetInput>;
  shipping?: Maybe<ShippingTargetInput>;
  multiBuyLineItems?: Maybe<MultiBuyLineItemsTargetInput>;
  multiBuyCustomLineItems?: Maybe<MultiBuyCustomLineItemsTargetInput>;
};

export type CartDiscountUpdateAction = {
  changeCartPredicate?: Maybe<ChangeCartDiscountCartPredicate>;
  changeIsActive?: Maybe<ChangeCartDiscountIsActive>;
  changeName?: Maybe<ChangeCartDiscountName>;
  changeRequiresDiscountCode?: Maybe<ChangeCartDiscountRequiresDiscountCode>;
  changeSortOrder?: Maybe<ChangeCartDiscountSortOrder>;
  changeStackingMode?: Maybe<ChangeCartDiscountStackingMode>;
  changeTarget?: Maybe<ChangeCartDiscountTarget>;
  changeValue?: Maybe<ChangeCartDiscountValue>;
  setCustomField?: Maybe<SetCartDiscountCustomField>;
  setCustomType?: Maybe<SetCartDiscountCustomType>;
  setDescription?: Maybe<SetCartDiscountDescription>;
  setKey?: Maybe<SetCartDiscountKey>;
  setValidFrom?: Maybe<SetCartDiscountValidFrom>;
  setValidFromAndUntil?: Maybe<SetCartDiscountValidFromAndUntil>;
  setValidUntil?: Maybe<SetCartDiscountValidUntil>;
};

export type CartDiscountValueInput = {
  relative?: Maybe<RelativeDiscountValueInput>;
  absolute?: Maybe<AbsoluteDiscountValueInput>;
  fixed?: Maybe<FixedPriceDiscountValueInput>;
  giftLineItem?: Maybe<GiftLineItemValueInput>;
};

export type CartDraft = {
  currency: Scalars['Currency'];
  country?: Maybe<Scalars['Country']>;
  inventoryMode?: Maybe<InventoryMode>;
  custom?: Maybe<CustomFieldsDraft>;
  customerEmail?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<AddressInput>;
  billingAddress?: Maybe<AddressInput>;
  shippingMethod?: Maybe<ResourceIdentifierInput>;
  taxMode?: Maybe<TaxMode>;
  locale?: Maybe<Scalars['Locale']>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  itemShippingAddresses?: Maybe<Array<AddressInput>>;
  discountCodes?: Maybe<Array<Scalars['String']>>;
  store?: Maybe<ResourceIdentifierInput>;
  key?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<LineItemDraft>>;
  customLineItems?: Maybe<Array<CustomLineItemDraft>>;
  customerId?: Maybe<Scalars['String']>;
  externalTaxRateForShippingMethod?: Maybe<ExternalTaxRateDraft>;
  anonymousId?: Maybe<Scalars['String']>;
  taxRoundingMode?: Maybe<RoundingMode>;
  taxCalculationMode?: Maybe<TaxCalculationMode>;
  customerGroup?: Maybe<ResourceIdentifierInput>;
  shippingRateInput?: Maybe<ShippingRateInputDraft>;
  origin?: Maybe<CartOrigin>;
};

export type CartScoreInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type CartScoreType = ShippingRateInputType & {
  type: Scalars['String'];
};

export type CartUpdateAction = {
  addCustomLineItem?: Maybe<AddCartCustomLineItem>;
  addDiscountCode?: Maybe<AddCartDiscountCode>;
  addItemShippingAddress?: Maybe<AddCartItemShippingAddress>;
  addLineItem?: Maybe<AddCartLineItem>;
  addPayment?: Maybe<AddCartPayment>;
  addShoppingList?: Maybe<AddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: Maybe<ApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: Maybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeCustomLineItemMoney?: Maybe<ChangeCartCustomLineItemMoney>;
  changeCustomLineItemQuantity?: Maybe<ChangeCartCustomLineItemQuantity>;
  changeLineItemQuantity?: Maybe<ChangeCartLineItemQuantity>;
  changeTaxCalculationMode?: Maybe<ChangeCartTaxCalculationMode>;
  changeTaxMode?: Maybe<ChangeCartTaxMode>;
  changeTaxRoundingMode?: Maybe<ChangeCartTaxRoundingMode>;
  recalculate?: Maybe<RecalculateCart>;
  removeCustomLineItem?: Maybe<RemoveCartCustomLineItem>;
  removeDiscountCode?: Maybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: Maybe<RemoveCartItemShippingAddress>;
  removeLineItem?: Maybe<RemoveCartLineItem>;
  removePayment?: Maybe<RemoveCartPayment>;
  setAnonymousId?: Maybe<SetCartAnonymousId>;
  setBillingAddress?: Maybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: Maybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: Maybe<SetCartBillingAddressCustomType>;
  setKey?: Maybe<SetCartKey>;
  setCartTotalTax?: Maybe<SetCartTotalTax>;
  setCountry?: Maybe<SetCartCountry>;
  setCustomField?: Maybe<SetCartCustomField>;
  setCustomLineItemCustomField?: Maybe<SetCartCustomLineItemCustomField>;
  setCustomLineItemCustomType?: Maybe<SetCartCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: Maybe<SetCartCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: Maybe<SetCartCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: Maybe<SetCartCustomLineItemTaxRate>;
  setCustomShippingMethod?: Maybe<SetCartCustomShippingMethod>;
  setCustomType?: Maybe<SetCartCustomType>;
  setCustomerEmail?: Maybe<SetCartCustomerEmail>;
  setCustomerGroup?: Maybe<SetCartCustomerGroup>;
  setCustomerId?: Maybe<SetCartCustomerId>;
  setDeleteDaysAfterLastModification?: Maybe<SetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: Maybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: Maybe<SetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: Maybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: Maybe<SetCartLineItemDistributionChannel>;
  setLineItemPrice?: Maybe<SetCartLineItemPrice>;
  setLineItemShippingDetails?: Maybe<SetCartLineItemShippingDetails>;
  setLineItemTaxAmount?: Maybe<SetCartLineItemTaxAmount>;
  setLineItemTaxRate?: Maybe<SetCartLineItemTaxRate>;
  setLineItemTotalPrice?: Maybe<SetCartLineItemTotalPrice>;
  setLocale?: Maybe<SetCartLocale>;
  setShippingAddress?: Maybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: Maybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: Maybe<SetCartShippingAddressCustomType>;
  setShippingMethod?: Maybe<SetCartShippingMethod>;
  setShippingMethodTaxAmount?: Maybe<SetCartShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: Maybe<SetCartShippingMethodTaxRate>;
  setShippingRateInput?: Maybe<SetCartShippingRateInput>;
  updateItemShippingAddress?: Maybe<UpdateCartItemShippingAddress>;
};

export type CartValueInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type CartValueType = ShippingRateInputType & {
  type: Scalars['String'];
};

export type CartsConfigurationInput = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type CategoryCreated = MessagePayload & {
  category: Category;
  type: Scalars['String'];
};

export type CategoryDraft = {
  key?: Maybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  custom?: Maybe<CustomFieldsDraft>;
  slug: Array<LocalizedStringItemInputType>;
  externalId?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Array<LocalizedStringItemInputType>>;
  metaDescription?: Maybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: Maybe<Array<LocalizedStringItemInputType>>;
  orderHint?: Maybe<Scalars['String']>;
  parent?: Maybe<ResourceIdentifierInput>;
  assets?: Maybe<Array<AssetDraftInput>>;
};

export type CategoryOrderHintInput = {
  uuid: Scalars['String'];
  orderHint: Scalars['String'];
};

export type CategorySlugChanged = MessagePayload & {
  slug?: Maybe<Scalars['String']>;
  oldSlug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  type: Scalars['String'];
};


export type CategorySlugChangedSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategorySlugChangedOldSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type CategoryUpdateAction = {
  addAsset?: Maybe<AddCategoryAsset>;
  changeAssetName?: Maybe<ChangeCategoryAssetName>;
  changeAssetOrder?: Maybe<ChangeCategoryAssetOrder>;
  changeName?: Maybe<ChangeCategoryName>;
  changeOrderHint?: Maybe<ChangeCategoryOrderHint>;
  changeSlug?: Maybe<ChangeCategorySlug>;
  changeParent?: Maybe<ChangeCategoryParent>;
  removeAsset?: Maybe<RemoveCategoryAsset>;
  setAssetCustomField?: Maybe<SetCategoryAssetCustomField>;
  setAssetCustomType?: Maybe<SetCategoryAssetCustomType>;
  setAssetDescription?: Maybe<SetCategoryAssetDescription>;
  setAssetKey?: Maybe<SetCategoryAssetKey>;
  setAssetSources?: Maybe<SetCategoryAssetSources>;
  setAssetTags?: Maybe<SetCategoryAssetTags>;
  setCustomField?: Maybe<SetCategoryCustomField>;
  setCustomType?: Maybe<SetCategoryCustomType>;
  setDescription?: Maybe<SetCategoryDescription>;
  setKey?: Maybe<SetCategoryKey>;
  setMetaDescription?: Maybe<SetCategoryMetaDescription>;
  setMetaKeywords?: Maybe<SetCategoryMetaKeywords>;
  setMetaTitle?: Maybe<SetCategoryMetaTitle>;
  setExternalId?: Maybe<SetCategoryExternalId>;
};

export type ChangeCartCustomLineItemMoney = {
  customLineItemId: Scalars['String'];
  money: BaseMoneyInput;
};

export type ChangeCartCustomLineItemQuantity = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeCartDiscountCartPredicate = {
  cartPredicate: Scalars['String'];
};

export type ChangeCartDiscountIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeCartDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCartDiscountRequiresDiscountCode = {
  requiresDiscountCode: Scalars['Boolean'];
};

export type ChangeCartDiscountSortOrder = {
  sortOrder: Scalars['String'];
};

export type ChangeCartDiscountStackingMode = {
  stackingMode: StackingMode;
};

export type ChangeCartDiscountTarget = {
  target: CartDiscountTargetInput;
};

export type ChangeCartDiscountValue = {
  value: CartDiscountValueInput;
};

export type ChangeCartLineItemQuantity = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
};

export type ChangeCartTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeCartTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeCategoryAssetName = {
  name: Array<LocalizedStringItemInputType>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type ChangeCategoryAssetOrder = {
  assetOrder: Array<Scalars['String']>;
};

export type ChangeCategoryName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCategoryOrderHint = {
  orderHint: Scalars['String'];
};

export type ChangeCategoryParent = {
  parent: ResourceIdentifierInput;
};

export type ChangeCategorySlug = {
  slug: Array<LocalizedStringItemInputType>;
};

export type ChangeChannelDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeChannelKey = {
  key: Scalars['String'];
};

export type ChangeChannelName = {
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeCustomerAddress = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
  address: AddressInput;
};

export type ChangeCustomerEmail = {
  email: Scalars['String'];
};

export type ChangeCustomerGroupName = {
  name: Scalars['String'];
};

export type ChangeDiscountCodeCartDiscounts = {
  cartDiscounts: Array<ReferenceInput>;
};

export type ChangeDiscountCodeGroups = {
  groups: Array<Scalars['String']>;
};

export type ChangeDiscountCodeIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeExtensionDestination = {
  destination: ExtensionDestinationInput;
};

export type ChangeExtensionTriggers = {
  triggers: Array<TriggerInput>;
};

export type ChangeInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type ChangeMyCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeOrderState = {
  orderState: OrderState;
};

export type ChangePaymentAmountPlanned = {
  amount: MoneyInput;
};

export type ChangePaymentTransactionInteractionId = {
  transactionId: Scalars['String'];
  interactionId: Scalars['String'];
};

export type ChangePaymentTransactionState = {
  transactionId: Scalars['String'];
  state: TransactionState;
};

export type ChangePaymentTransactionTimestamp = {
  transactionId: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type ChangeProductAssetName = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  name: Array<LocalizedStringItemInputType>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type ChangeProductAssetOrder = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  assetOrder: Array<Scalars['String']>;
};

export type ChangeProductDiscountIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeProductDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeProductDiscountPredicate = {
  predicate: Scalars['String'];
};

export type ChangeProductDiscountSortOrder = {
  sortOrder: Scalars['String'];
};

export type ChangeProductDiscountValue = {
  value: ProductDiscountValueInput;
};

export type ChangeProductImageLabel = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type ChangeProductMasterVariant = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type ChangeProductName = {
  name: Array<LocalizedStringItemInputType>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type ChangeProductPrice = {
  priceId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  price: ProductPriceDataInput;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type ChangeProductSlug = {
  slug: Array<LocalizedStringItemInputType>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type ChangeProjectSettingsCartsConfiguration = {
  cartsConfiguration: CartsConfigurationInput;
};

export type ChangeProjectSettingsCountries = {
  countries: Array<Scalars['Country']>;
};

export type ChangeProjectSettingsCountryTaxRateFallbackEnabled = {
  countryTaxRateFallbackEnabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsCurrencies = {
  currencies: Array<Scalars['Currency']>;
};

export type ChangeProjectSettingsLanguages = {
  languages: Array<Scalars['Locale']>;
};

export type ChangeProjectSettingsMessagesConfiguration = {
  messagesConfiguration: MessagesConfigurationDraft;
};

export type ChangeProjectSettingsMessagesEnabled = {
  messagesEnabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsName = {
  name: Scalars['String'];
};

export type ChangeProjectSettingsProductSearchIndexingEnabled = {
  enabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsShoppingListsConfiguration = {
  shoppingListsConfiguration: ShoppingListsConfigurationInput;
};

export type ChangeShippingMethodIsDefault = {
  isDefault: Scalars['Boolean'];
};

export type ChangeShippingMethodName = {
  name: Scalars['String'];
};

export type ChangeShippingMethodTaxCategory = {
  taxCategory: ResourceIdentifierInput;
};

export type ChangeShoppingListLineItemQuantity = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ChangeShoppingListLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']>;
};

export type ChangeShoppingListName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeShoppingListTextLineItemName = {
  textLineItemId: Scalars['String'];
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeShoppingListTextLineItemQuantity = {
  textLineItemId: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ChangeShoppingListTextLineItemsOrder = {
  textLineItemOrder: Array<Scalars['String']>;
};

export type ChangeStagedOrderCustomLineItemMoney = {
  customLineItemId: Scalars['String'];
  money: BaseMoneyInput;
};

export type ChangeStagedOrderCustomLineItemMoneyOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  money: BaseMoney;
};

export type ChangeStagedOrderCustomLineItemQuantity = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeStagedOrderCustomLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeStagedOrderLineItemQuantity = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
};

export type ChangeStagedOrderLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
};

export type ChangeStagedOrderOrderState = {
  orderState: OrderState;
};

export type ChangeStagedOrderOrderStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  orderState: OrderState;
};

export type ChangeStagedOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeStagedOrderPaymentStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  paymentState: PaymentState;
};

export type ChangeStagedOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeStagedOrderShipmentStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  shipmentState: ShipmentState;
};

export type ChangeStagedOrderTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeStagedOrderTaxCalculationModeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeStagedOrderTaxMode = {
  taxMode: TaxMode;
};

export type ChangeStagedOrderTaxModeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  taxMode: TaxMode;
};

export type ChangeStagedOrderTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeStagedOrderTaxRoundingModeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  taxRoundingMode: RoundingMode;
};

export type ChangeStateInitial = {
  initial: Scalars['Boolean'];
};

export type ChangeStateKey = {
  key: Scalars['String'];
};

export type ChangeStateType = {
  type: StateType;
};

export type ChangeSubscriptionDestination = {
  destination: DestinationInput;
};

export type ChangeSubscriptionInput = {
  resourceTypeId: Scalars['String'];
};

export type ChangeTypeEnumValueLabel = {
  fieldName: Scalars['String'];
  value: EnumValueInput;
};

export type ChangeTypeEnumValueOrder = {
  fieldName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type ChangeTypeFieldDefinitionOrder = {
  fieldNames: Array<Scalars['String']>;
};

export type ChangeTypeInputHint = {
  fieldName: Scalars['String'];
  inputHint: TextInputHint;
};

export type ChangeTypeKey = {
  key: Scalars['String'];
};

export type ChangeTypeLabel = {
  fieldName: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeTypeLocalizedEnumValueLabel = {
  fieldName: Scalars['String'];
  value: LocalizedEnumValueInput;
};

export type ChangeTypeLocalizedEnumValueOrder = {
  fieldName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type ChangeTypeName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeZoneName = {
  name: Scalars['String'];
};

export type ChannelDraft = {
  key: Scalars['String'];
  roles: Array<ChannelRole>;
  name?: Maybe<Array<LocalizedStringItemInputType>>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  custom?: Maybe<CustomFieldsDraft>;
  address?: Maybe<AddressInput>;
  geoLocation?: Maybe<GeometryInput>;
};

export type ChannelReferenceIdentifier = {
  typeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type ChannelUpdateAction = {
  addRoles?: Maybe<AddChannelRoles>;
  changeDescription?: Maybe<ChangeChannelDescription>;
  changeKey?: Maybe<ChangeChannelKey>;
  changeName?: Maybe<ChangeChannelName>;
  removeRoles?: Maybe<RemoveChannelRoles>;
  setAddress?: Maybe<SetChannelAddress>;
  setAddressCustomField?: Maybe<SetChannelAddressCustomField>;
  setAddressCustomType?: Maybe<SetChannelAddressCustomType>;
  setCustomField?: Maybe<SetChannelCustomField>;
  setCustomType?: Maybe<SetChannelCustomType>;
  setGeoLocation?: Maybe<SetChannelGeoLocation>;
  setRoles?: Maybe<SetChannelRoles>;
};

export type ClassificationShippingRateInput = ShippingRateInput & {
  key: Scalars['String'];
  type: Scalars['String'];
  labelAllLocales: Array<LocalizedString>;
  label?: Maybe<Scalars['String']>;
};


export type ClassificationShippingRateInputLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ClassificationShippingRateInputDraft = {
  key: Scalars['String'];
};

export type ClassificationShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  key: Scalars['String'];
  type: Scalars['String'];
};

export type CloudEventsSubscriptionsFormat = NotificationFormat & {
  type: Scalars['String'];
  cloudEventsVersion: Scalars['String'];
};

export type CloudEventsSubscriptionsFormatInput = {
  cloudEventsVersion: Scalars['String'];
};

export type CreateApiClient = {
  name: Scalars['String'];
  scope: Scalars['String'];
};

export type CreateStore = {
  key: Scalars['String'];
  name?: Maybe<Array<LocalizedStringItemInputType>>;
  languages?: Maybe<Array<Scalars['Locale']>>;
  distributionChannels?: Maybe<Array<ResourceIdentifierInput>>;
  supplyChannels?: Maybe<Array<ResourceIdentifierInput>>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type CreateZone = {
  name: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<ZoneLocation>>;
};

export type CustomField = {
  name: Scalars['String'];
};

/**
 * A key-value pair representing the field name and value of one single custom field.
 *
 * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2001-09-11T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\", \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\", \"product\"}"`
 */
export type CustomFieldInput = {
  name: Scalars['String'];
  /**
   * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2001-09-11T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\", \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\", \"product\"}"`
   */
  value: Scalars['String'];
};

export type CustomFieldsCommand = {
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  fields: Scalars['Json'];
  typeResId?: Maybe<ResourceIdentifier>;
};

export type CustomFieldsDraft = {
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  type?: Maybe<ResourceIdentifierInput>;
  fields?: Maybe<Array<CustomFieldInput>>;
};

export type CustomLineItemDraft = {
  name: Array<LocalizedStringItemInputType>;
  money: BaseMoneyInput;
  slug: Scalars['String'];
  taxCategory?: Maybe<ReferenceInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  quantity?: Maybe<Scalars['Long']>;
  custom?: Maybe<CustomFieldsDraft>;
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
};

export type CustomLineItemDraftOutput = {
  money: BaseMoney;
  slug: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  quantity?: Maybe<Scalars['Long']>;
  custom?: Maybe<CustomFieldsCommand>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  name?: Maybe<Scalars['String']>;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  nameAllLocales: Array<LocalizedString>;
};


export type CustomLineItemDraftOutputNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type CustomLineItemReturnItem = ReturnItem & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  id: Scalars['String'];
  quantity: Scalars['Long'];
  comment?: Maybe<Scalars['String']>;
  shipmentState: ReturnShipmentState;
  paymentState: ReturnPaymentState;
  lastModifiedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type CustomLineItemStateTransition = MessagePayload & {
  customLineItemId: Scalars['String'];
  transitionDate: Scalars['DateTime'];
  quantity: Scalars['Long'];
  fromState?: Maybe<State>;
  toState?: Maybe<State>;
  fromStateRef: Reference;
  toStateRef: Reference;
  type: Scalars['String'];
};

export type CustomLineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  type: Scalars['String'];
};

export type CustomLineItemsTargetInput = {
  predicate: Scalars['String'];
};

export type CustomObjectDraft = {
  key: Scalars['String'];
  container: Scalars['String'];
  /** The value should be passed in a form of escaped JSON */
  value: Scalars['String'];
  version?: Maybe<Scalars['Long']>;
};

export type CustomSuggestTokenizer = SuggestTokenizer & {
  inputs: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomSuggestTokenizerInput = {
  text: Scalars['String'];
  suggestTokenizer?: Maybe<BaseSearchKeywordInput>;
};

export type CustomerAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerAddressChanged = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerCompanyNameSet = MessagePayload & {
  companyName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomerCreated = MessagePayload & {
  customer: Customer;
  type: Scalars['String'];
};

export type CustomerDateOfBirthSet = MessagePayload & {
  dateOfBirth?: Maybe<Scalars['Date']>;
  type: Scalars['String'];
};

export type CustomerEmailChanged = MessagePayload & {
  email: Scalars['String'];
  type: Scalars['String'];
};

export type CustomerEmailToken = Versioned & {
  customerId: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  value: Scalars['String'];
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type CustomerEmailVerified = MessagePayload & {
  type: Scalars['String'];
};

export type CustomerGroupDraft = {
  groupName: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type CustomerGroupReferenceIdentifier = {
  typeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type CustomerGroupSet = MessagePayload & {
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type CustomerGroupUpdateAction = {
  changeName?: Maybe<ChangeCustomerGroupName>;
  setKey?: Maybe<SetCustomerGroupKey>;
  setCustomType?: Maybe<SetCustomerGroupCustomType>;
  setCustomField?: Maybe<SetCustomerGroupCustomField>;
};

export type CustomerPasswordToken = Versioned & {
  customerId: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  value: Scalars['String'];
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type CustomerPasswordUpdated = MessagePayload & {
  reset: Scalars['Boolean'];
  type: Scalars['String'];
};

export type CustomerSignInDraft = {
  email: Scalars['String'];
  password: Scalars['String'];
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: Maybe<Scalars['String']>;
  anonymousCart?: Maybe<ResourceIdentifierInput>;
  anonymousCartSignInMode?: Maybe<AnonymousCartSignInMode>;
  anonymousId?: Maybe<Scalars['String']>;
  updateProductData?: Maybe<Scalars['Boolean']>;
};

export type CustomerSignInResult = {
  customer: Customer;
  cart?: Maybe<Cart>;
};

export type CustomerSignMeInDraft = {
  email: Scalars['String'];
  password: Scalars['String'];
  activeCartSignInMode?: Maybe<AnonymousCartSignInMode>;
  updateProductData?: Maybe<Scalars['Boolean']>;
};

export type CustomerSignMeUpDraft = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  companyName?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<AddressInput>>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: Maybe<Array<Scalars['Int']>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: Maybe<Array<Scalars['Int']>>;
  custom?: Maybe<CustomFieldsDraft>;
  locale?: Maybe<Scalars['Locale']>;
  salutation?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  stores?: Maybe<Array<ResourceIdentifierInput>>;
};

export type CustomerSignUpDraft = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  companyName?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<AddressInput>>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: Maybe<Array<Scalars['Int']>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: Maybe<Array<Scalars['Int']>>;
  custom?: Maybe<CustomFieldsDraft>;
  locale?: Maybe<Scalars['Locale']>;
  salutation?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  stores?: Maybe<Array<ResourceIdentifierInput>>;
  customerNumber?: Maybe<Scalars['String']>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: Maybe<Scalars['String']>;
  anonymousCart?: Maybe<ResourceIdentifierInput>;
  externalId?: Maybe<Scalars['String']>;
  customerGroup?: Maybe<ResourceIdentifierInput>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  anonymousId?: Maybe<Scalars['String']>;
};

export type CustomerUpdateAction = {
  addAddress?: Maybe<AddCustomerAddress>;
  addBillingAddressId?: Maybe<AddCustomerBillingAddressId>;
  addShippingAddressId?: Maybe<AddCustomerShippingAddressId>;
  addStore?: Maybe<AddCustomerStore>;
  changeAddress?: Maybe<ChangeCustomerAddress>;
  changeEmail?: Maybe<ChangeCustomerEmail>;
  removeAddress?: Maybe<RemoveCustomerAddress>;
  removeBillingAddressId?: Maybe<RemoveCustomerBillingAddressId>;
  removeShippingAddressId?: Maybe<RemoveCustomerShippingAddressId>;
  removeStore?: Maybe<RemoveCustomerStore>;
  setCompanyName?: Maybe<SetCustomerCompanyName>;
  setAddressCustomField?: Maybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: Maybe<SetCustomerAddressCustomType>;
  setCustomField?: Maybe<SetCustomerCustomField>;
  setCustomType?: Maybe<SetCustomerCustomType>;
  setCustomerGroup?: Maybe<SetCustomerGroup>;
  setKey?: Maybe<SetCustomerKey>;
  setLocale?: Maybe<SetCustomerLocale>;
  setCustomerNumber?: Maybe<SetCustomerNumber>;
  setDateOfBirth?: Maybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: Maybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: Maybe<SetCustomerDefaultShippingAddress>;
  setExternalId?: Maybe<SetCustomerExternalId>;
  setFirstName?: Maybe<SetCustomerFirstName>;
  setLastName?: Maybe<SetCustomerLastName>;
  setMiddleName?: Maybe<SetCustomerMiddleName>;
  setSalutation?: Maybe<SetCustomerSalutation>;
  setStores?: Maybe<SetCustomerStores>;
  setTitle?: Maybe<SetCustomerTitle>;
  setVatId?: Maybe<SetCustomerVatId>;
};

export type DateAttribute = Attribute & {
  value: Scalars['Date'];
  name: Scalars['String'];
};

export type DateField = CustomField & {
  value: Scalars['Date'];
  name: Scalars['String'];
};

export type DateTimeAttribute = Attribute & {
  value: Scalars['DateTime'];
  name: Scalars['String'];
};

export type DateTimeField = CustomField & {
  value: Scalars['DateTime'];
  name: Scalars['String'];
};

export type DateTimeType = FieldType & {
  name: Scalars['String'];
};

export type DateType = FieldType & {
  name: Scalars['String'];
};

export type DeliveryAdded = MessagePayload & {
  delivery: Delivery;
  type: Scalars['String'];
};

export type DeliveryAddressSet = MessagePayload & {
  deliveryId: Scalars['String'];
  address?: Maybe<Address>;
  oldAddress?: Maybe<Address>;
  type: Scalars['String'];
};

export type DeliveryItemDraftType = {
  id: Scalars['String'];
  quantity: Scalars['Long'];
};

export type DeliveryItemsUpdated = MessagePayload & {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItem>;
  oldItems: Array<DeliveryItem>;
  type: Scalars['String'];
};

export type DeliveryRemoved = MessagePayload & {
  delivery: Delivery;
  type: Scalars['String'];
};

export type DestinationInput = {
  SQS?: Maybe<SqsDestinationInput>;
  SNS?: Maybe<SnsDestinationInput>;
  AzureServiceBus?: Maybe<AzureServiceBusDestinationInput>;
  EventGrid?: Maybe<EventGridDestinationInput>;
  GoogleCloudPubSub?: Maybe<GoogleCloudPubSubDestinationInput>;
};

export type DimensionsInput = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type DiscountCodeDraft = {
  code: Scalars['String'];
  name?: Maybe<Array<LocalizedStringItemInputType>>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  cartDiscounts: Array<ReferenceInput>;
  isActive?: Maybe<Scalars['Boolean']>;
  maxApplications?: Maybe<Scalars['Long']>;
  maxApplicationsPerCustomer?: Maybe<Scalars['Long']>;
  cartPredicate?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsDraft>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<Array<Scalars['String']>>;
};

export type DiscountCodeUpdateAction = {
  changeCartDiscounts?: Maybe<ChangeDiscountCodeCartDiscounts>;
  changeGroups?: Maybe<ChangeDiscountCodeGroups>;
  changeIsActive?: Maybe<ChangeDiscountCodeIsActive>;
  setCartPredicate?: Maybe<SetDiscountCodeCartPredicate>;
  setCustomField?: Maybe<SetDiscountCodeCustomField>;
  setCustomType?: Maybe<SetDiscountCodeCustomType>;
  setDescription?: Maybe<SetDiscountCodeDescription>;
  setMaxApplications?: Maybe<SetDiscountCodeMaxApplications>;
  setMaxApplicationsPerCustomer?: Maybe<SetDiscountCodeMaxApplicationsPerCustomer>;
  setName?: Maybe<SetDiscountCodeName>;
  setValidFrom?: Maybe<SetDiscountCodeValidFrom>;
  setValidFromAndUntil?: Maybe<SetDiscountCodeValidFromAndUntil>;
  setValidUntil?: Maybe<SetDiscountCodeValidUntil>;
};

export type DiscountedProductPriceValueInput = {
  value: BaseMoneyInput;
  discount: ReferenceInput;
};

export type EnumAttribute = Attribute & {
  key: Scalars['String'];
  label: Scalars['String'];
  name: Scalars['String'];
};

export type EnumField = CustomField & {
  key: Scalars['String'];
  name: Scalars['String'];
};

export type EnumType = FieldType & {
  values: Array<EnumValue>;
  name: Scalars['String'];
};

export type EnumTypeDraft = {
  values: Array<PlainEnumValueDraft>;
};

export type EnumValue = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type EnumValueInput = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type EventGridDestination = Destination & {
  uri: Scalars['String'];
  accessKey: Scalars['String'];
  type: Scalars['String'];
};

export type EventGridDestinationInput = {
  uri: Scalars['String'];
  accessKey: Scalars['String'];
};

export type ExtensionDestinationInput = {
  HTTP?: Maybe<HttpDestinationInput>;
  AWSLambda?: Maybe<AwsLambdaDestinationInput>;
};

export type ExtensionDraft = {
  key?: Maybe<Scalars['String']>;
  destination: ExtensionDestinationInput;
  triggers: Array<TriggerInput>;
  timeoutInMs?: Maybe<Scalars['Int']>;
};

export type ExtensionUpdateAction = {
  changeDestination?: Maybe<ChangeExtensionDestination>;
  changeTriggers?: Maybe<ChangeExtensionTriggers>;
  setKey?: Maybe<SetExtensionKey>;
  setTimeoutInMs?: Maybe<SetExtensionTimeoutInMs>;
};

export type ExternalDiscountValue = ProductDiscountValue & {
  type: Scalars['String'];
};

export type ExternalDiscountValueInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type ExternalLineItemTotalPrice = {
  price: BaseMoney;
  totalPrice: Money;
};

export type ExternalLineItemTotalPriceDraft = {
  price: BaseMoneyInput;
  totalPrice: MoneyInput;
};

export type ExternalOAuthDraft = {
  url: Scalars['String'];
  authorizationHeader: Scalars['String'];
};

export type ExternalTaxAmountDraft = {
  totalGross: MoneyInput;
  taxRate: ExternalTaxRateDraft;
};

export type ExternalTaxAmountDraftOutput = {
  totalGross: Money;
  taxRate: ExternalTaxRateDraftOutput;
};

export type ExternalTaxRateDraft = {
  name: Scalars['String'];
  amount: Scalars['Float'];
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
  subRates?: Maybe<Array<SubRateDraft>>;
  includedInPrice?: Maybe<Scalars['Boolean']>;
};

export type ExternalTaxRateDraftOutput = {
  name: Scalars['String'];
  amount?: Maybe<Scalars['Float']>;
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
  subRates: Array<SubRate>;
  includedInPrice: Scalars['Boolean'];
};

export type FieldDefinitionInput = {
  type: FieldTypeInput;
  name: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
  required: Scalars['Boolean'];
  inputHint: TextInputHint;
};

export type FieldTypeEnumTypeDraft = {
  values: Array<EnumValueInput>;
};

export type FieldTypeInput = {
  Set?: Maybe<FieldTypeSetTypeDraft>;
  String?: Maybe<SimpleFieldTypeDraft>;
  LocalizedString?: Maybe<SimpleFieldTypeDraft>;
  Number?: Maybe<SimpleFieldTypeDraft>;
  Money?: Maybe<SimpleFieldTypeDraft>;
  Date?: Maybe<SimpleFieldTypeDraft>;
  Time?: Maybe<SimpleFieldTypeDraft>;
  DateTime?: Maybe<SimpleFieldTypeDraft>;
  Boolean?: Maybe<SimpleFieldTypeDraft>;
  Enum?: Maybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: Maybe<FieldTypeLocalizedEnumTypeDraft>;
  Reference?: Maybe<FieldTypeReferenceTypeDraft>;
};

export type FieldTypeLocalizedEnumTypeDraft = {
  values: Array<LocalizedEnumValueInput>;
};

export type FieldTypeReferenceTypeDraft = {
  referenceTypeId: Scalars['String'];
};

export type FieldTypeSetElementTypeDraft = {
  String?: Maybe<SimpleFieldTypeDraft>;
  LocalizedString?: Maybe<SimpleFieldTypeDraft>;
  Number?: Maybe<SimpleFieldTypeDraft>;
  Money?: Maybe<SimpleFieldTypeDraft>;
  Date?: Maybe<SimpleFieldTypeDraft>;
  Time?: Maybe<SimpleFieldTypeDraft>;
  DateTime?: Maybe<SimpleFieldTypeDraft>;
  Boolean?: Maybe<SimpleFieldTypeDraft>;
  Enum?: Maybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: Maybe<FieldTypeLocalizedEnumTypeDraft>;
  Reference?: Maybe<FieldTypeReferenceTypeDraft>;
};

export type FieldTypeSetTypeDraft = {
  elementType: FieldTypeSetElementTypeDraft;
};

export type FixedPriceDiscountValue = CartDiscountValue & {
  money: Array<Money>;
  type: Scalars['String'];
};

export type FixedPriceDiscountValueInput = {
  money: Array<MoneyInput>;
};

export type GeometryInput = {
  type: Scalars['String'];
  coordinates?: Maybe<Array<Scalars['Float']>>;
};

export type GiftLineItemValue = CartDiscountValue & {
  type: Scalars['String'];
  variantId: Scalars['Int'];
  productRef: ProductReferenceIdentifier;
  distributionChannelRef?: Maybe<ChannelReferenceIdentifier>;
  supplyChannelRef?: Maybe<ChannelReferenceIdentifier>;
};

export type GiftLineItemValueInput = {
  product: ResourceIdentifierInput;
  variantId: Scalars['Int'];
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
};

export type GoogleCloudPubSubDestination = Destination & {
  projectId: Scalars['String'];
  topic: Scalars['String'];
  type: Scalars['String'];
};

export type GoogleCloudPubSubDestinationInput = {
  projectId: Scalars['String'];
  topic: Scalars['String'];
};

export type HighPrecisionMoney = BaseMoney & {
  type: Scalars['String'];
  currencyCode: Scalars['Currency'];
  preciseAmount: Scalars['Long'];
  centAmount: Scalars['Long'];
  fractionDigits: Scalars['Int'];
};

export type HighPrecisionMoneyInput = {
  currencyCode: Scalars['Currency'];
  preciseAmount: Scalars['Long'];
  fractionDigits: Scalars['Int'];
  centAmount?: Maybe<Scalars['Long']>;
};

export type HttpDestination = ExtensionDestination & {
  type: Scalars['String'];
  url: Scalars['String'];
  authentication?: Maybe<HttpDestinationAuthentication>;
};

export type HttpDestinationAuthentication = {
  type: Scalars['String'];
};

export type HttpDestinationAuthenticationInput = {
  AuthorizationHeader?: Maybe<AuthorizationHeaderInput>;
  AzureFunctions?: Maybe<AzureFunctionsAuthenticationInput>;
};

export type HttpDestinationInput = {
  url: Scalars['String'];
  authentication?: Maybe<HttpDestinationAuthenticationInput>;
};

export type ImageInput = {
  url: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  dimensions: DimensionsInput;
};

export type ImportOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportOrderLineItemState = {
  lineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  state: Scalars['Set'];
};

export type ImportStagedOrderLineItemState = {
  lineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  state: Scalars['Set'];
};

export type InventoryEntryCreated = MessagePayload & {
  inventoryEntry: InventoryEntryCreatedContent;
  type: Scalars['String'];
};

export type InventoryEntryCreatedContent = {
  inventoryEntryId: Scalars['String'];
  sku: Scalars['String'];
  quantityOnStock: Scalars['Long'];
  key?: Maybe<Scalars['String']>;
  restockableInDays?: Maybe<Scalars['Int']>;
  expectedDelivery?: Maybe<Scalars['DateTime']>;
  messageId?: Maybe<MessageId>;
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  custom?: Maybe<CustomFieldsType>;
};

export type InventoryEntryDeleted = MessagePayload & {
  sku: Scalars['String'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type InventoryEntryDraft = {
  sku: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  quantityOnStock?: Maybe<Scalars['Long']>;
  restockableInDays?: Maybe<Scalars['Int']>;
  expectedDelivery?: Maybe<Scalars['DateTime']>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type InventoryEntryQuantitySet = MessagePayload & {
  oldQuantityOnStock: Scalars['Long'];
  newQuantityOnStock: Scalars['Long'];
  oldAvailableQuantity: Scalars['Long'];
  newAvailableQuantity: Scalars['Long'];
  type: Scalars['String'];
};

export type InventoryEntryUpdateAction = {
  addQuantity?: Maybe<AddInventoryEntryQuantity>;
  changeQuantity?: Maybe<ChangeInventoryEntryQuantity>;
  removeQuantity?: Maybe<RemoveInventoryEntryQuantity>;
  setRestockableInDays?: Maybe<SetInventoryEntryRestockableInDays>;
  setExpectedDelivery?: Maybe<SetInventoryEntryExpectedDelivery>;
  setSupplyChannel?: Maybe<SetInventoryEntrySupplyChannel>;
  setCustomType?: Maybe<SetInventoryEntryCustomType>;
  setCustomField?: Maybe<SetInventoryEntryCustomField>;
};

export type ItemShippingDetailsDraft = {
  targets: Array<ShippingTargetDraft>;
};

export type ItemShippingDetailsDraftOutput = {
  targets: Array<ItemShippingTarget>;
};

export type ItemShippingDetailsDraftType = {
  targets: Array<ShippingTargetDraftType>;
};

export type ItemStateDraftType = {
  quantity: Scalars['Long'];
  state: ReferenceInput;
};

export type LineItemDraft = {
  productId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Long']>;
  variantId?: Maybe<Scalars['Int']>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  custom?: Maybe<CustomFieldsDraft>;
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
  addedAt?: Maybe<Scalars['DateTime']>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
};

export type LineItemDraftOutput = {
  productId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Long']>;
  variantId?: Maybe<Scalars['Int']>;
  custom?: Maybe<CustomFieldsCommand>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  addedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated Use 'distributionChannelResId' to fetch the resource identifier. */
  distributionChannel?: Maybe<ResourceIdentifier>;
  /** @deprecated Use 'supplyChannelResId' to fetch the resource identifier. */
  supplyChannel?: Maybe<ResourceIdentifier>;
  distributionChannelResId?: Maybe<ResourceIdentifier>;
  supplyChannelResId?: Maybe<ResourceIdentifier>;
};

export type LineItemReturnItem = ReturnItem & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  id: Scalars['String'];
  quantity: Scalars['Long'];
  comment?: Maybe<Scalars['String']>;
  shipmentState: ReturnShipmentState;
  paymentState: ReturnPaymentState;
  lastModifiedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type LineItemStateTransition = MessagePayload & {
  lineItemId: Scalars['String'];
  transitionDate: Scalars['DateTime'];
  quantity: Scalars['Long'];
  fromState?: Maybe<State>;
  toState?: Maybe<State>;
  fromStateRef: Reference;
  toStateRef: Reference;
  type: Scalars['String'];
};

export type LineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  type: Scalars['String'];
};

export type LineItemsTargetInput = {
  predicate: Scalars['String'];
};

export type LocalizableEnumTypeDraft = {
  values: Array<LocalizedEnumValueDraft>;
};

export type LocalizedEnumAttribute = Attribute & {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type LocalizedEnumAttributeLabelArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedEnumField = CustomField & {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type LocalizedEnumFieldLabelArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedEnumType = FieldType & {
  values: Array<LocalizedEnumValue>;
  name: Scalars['String'];
};

export type LocalizedEnumValue = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};


export type LocalizedEnumValueLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type LocalizedEnumValueDraft = {
  key: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedEnumValueInput = {
  key: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedStringAttribute = Attribute & {
  value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type LocalizedStringAttributeValueArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedStringField = CustomField & {
  value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type LocalizedStringFieldValueArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedStringItemInputType = {
  locale: Scalars['Locale'];
  value: Scalars['String'];
};

export type LocalizedStringType = FieldType & {
  name: Scalars['String'];
};

export type MessageId = {
  id: Scalars['String'];
  sequenceNumber: Scalars['Long'];
};

export type MessageSubscriptionInput = {
  resourceTypeId: Scalars['String'];
  types?: Maybe<Array<Scalars['String']>>;
};

export type MessagesConfigurationDraft = {
  enabled: Scalars['Boolean'];
  deleteDaysAfterCreation: Scalars['Int'];
};

export type MoneyAttribute = Attribute & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  name: Scalars['String'];
};

export type MoneyDraft = {
  currencyCode: Scalars['Currency'];
  centAmount: Scalars['Long'];
};

export type MoneyField = CustomField & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  name: Scalars['String'];
};

export type MoneyInput = {
  currencyCode: Scalars['Currency'];
  centAmount: Scalars['Long'];
};

export type MoneyType = FieldType & {
  name: Scalars['String'];
};

export type MoveProductImageToPosition = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  position: Scalars['Int'];
  staged?: Maybe<Scalars['Boolean']>;
};

export type MultiBuyCustomLineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  triggerQuantity: Scalars['Long'];
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  selectionMode: SelectionMode;
  type: Scalars['String'];
};

export type MultiBuyCustomLineItemsTargetInput = {
  predicate: Scalars['String'];
  triggerQuantity: Scalars['Long'];
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  selectionMode?: Maybe<SelectionMode>;
};

export type MultiBuyLineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  triggerQuantity: Scalars['Long'];
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  selectionMode: SelectionMode;
  type: Scalars['String'];
};

export type MultiBuyLineItemsTargetInput = {
  predicate: Scalars['String'];
  triggerQuantity: Scalars['Long'];
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  selectionMode?: Maybe<SelectionMode>;
};

export type Mutation = {
  createCustomerGroup?: Maybe<CustomerGroup>;
  updateCustomerGroup?: Maybe<CustomerGroup>;
  deleteCustomerGroup?: Maybe<CustomerGroup>;
  createCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Category>;
  createChannel?: Maybe<Channel>;
  updateChannel?: Maybe<Channel>;
  deleteChannel?: Maybe<Channel>;
  createOrUpdateCustomObject?: Maybe<CustomObject>;
  deleteCustomObject?: Maybe<CustomObject>;
  createProductType?: Maybe<ProductTypeDefinition>;
  updateProductType?: Maybe<ProductTypeDefinition>;
  deleteProductType?: Maybe<ProductTypeDefinition>;
  createTypeDefinition?: Maybe<TypeDefinition>;
  updateTypeDefinition?: Maybe<TypeDefinition>;
  deleteTypeDefinition?: Maybe<TypeDefinition>;
  createShippingMethod?: Maybe<ShippingMethod>;
  updateShippingMethod?: Maybe<ShippingMethod>;
  deleteShippingMethod?: Maybe<ShippingMethod>;
  createZone?: Maybe<Zone>;
  updateZone?: Maybe<Zone>;
  deleteZone?: Maybe<Zone>;
  createTaxCategory?: Maybe<TaxCategory>;
  updateTaxCategory?: Maybe<TaxCategory>;
  deleteTaxCategory?: Maybe<TaxCategory>;
  createDiscountCode?: Maybe<DiscountCode>;
  updateDiscountCode?: Maybe<DiscountCode>;
  deleteDiscountCode?: Maybe<DiscountCode>;
  createCartDiscount?: Maybe<CartDiscount>;
  updateCartDiscount?: Maybe<CartDiscount>;
  deleteCartDiscount?: Maybe<CartDiscount>;
  createProductDiscount?: Maybe<ProductDiscount>;
  updateProductDiscount?: Maybe<ProductDiscount>;
  deleteProductDiscount?: Maybe<ProductDiscount>;
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  createState?: Maybe<State>;
  updateState?: Maybe<State>;
  deleteState?: Maybe<State>;
  /** Creates a customer. If an anonymous cart is given then the cart is assigned to the created customer and the version number of the Cart will increase. If the id of an anonymous session is given, all carts and orders will be assigned to the created customer. */
  customerSignUp: CustomerSignInResult;
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * There may be carts and orders created before the sign in that should be assigned to the customer account. With the `anonymousCartId`, a single anonymous cart can be assigned. With the `anonymousId`, all orders and carts that have this `anonymousId` set will be assigned to the customer.
   * If both `anonymousCartId` and `anonymousId` are given, the anonymous cart must have the `anonymousId`.
   *
   * Additionally, there might also exist one or more active customer carts from an earlier session. On customer sign in there are several ways how to proceed with this cart and the cart referenced by the `anonymousCartId`.
   *
   * * If the customer does not have a cart yet, the anonymous cart becomes the customer's cart.
   * * If the customer already has one or more carts, the content of the anonymous cart will be copied to the customer's active cart that has been modified most recently.
   *
   *   In this case the `CartState` of the anonymous cart gets changed to `Merged` while the customer's cart remains the `Active` cart.
   *
   *   If a `LineItem` in the anonymous cart matches an existing line item, or a `CustomLineItem` matches an existing custom line item in the customer's cart, the maximum quantity of both line items is used as the new quantity.
   *
   *   `ItemShippingDetails` are copied from the item with the highest quantity.
   *
   *   If `itemShippingAddresses` are different in the two carts, the resulting cart contains the addresses of both the customer cart and the anonymous cart.
   *
   *   Note, that it is not possible to merge carts that differ in their currency (set during creation of the cart).
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignIn: CustomerSignInResult;
  updateCustomer?: Maybe<Customer>;
  deleteCustomer?: Maybe<Customer>;
  customerChangePassword?: Maybe<Customer>;
  /**
   * The following workflow can be used to reset the customer’s password:
   *
   * 1. Create a password reset token and send it embedded in a link to the customer.
   * 2. When the customer clicks on the link, you may optionally retrieve customer by password token.
   * 3. When the customer entered new password, use reset customer’s password to reset the password.
   */
  customerResetPassword?: Maybe<Customer>;
  /** Verifies customer's email using a token. */
  customerConfirmEmail?: Maybe<Customer>;
  /** The token value is used to reset the password of the customer with the given email. The token is valid only for 10 minutes. */
  customerCreatePasswordResetToken?: Maybe<CustomerPasswordToken>;
  customerCreateEmailVerificationToken: CustomerEmailToken;
  /** If used with an access token for Anonymous Sessions, all orders and carts belonging to the anonymousId will be assigned to the newly created customer. */
  customerSignMeUp: CustomerSignInResult;
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * If used with an access token for Anonymous Sessions, all orders and carts belonging to the `anonymousId` will be assigned to the newly created customer.
   *
   * * If the customer does not have a cart yet, the anonymous cart that was modified most recently becomes the customer's cart.
   * * If the customer already has a cart, the most recently modified anonymous cart will be handled according to the `AnonymousCartSignInMode`.
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignMeIn: CustomerSignInResult;
  updateMyCustomer?: Maybe<Customer>;
  deleteMyCustomer?: Maybe<Customer>;
  customerChangeMyPassword?: Maybe<Customer>;
  customerConfirmMyEmail?: Maybe<Customer>;
  customerResetMyPassword?: Maybe<Customer>;
  createInventoryEntry?: Maybe<InventoryEntry>;
  updateInventoryEntry?: Maybe<InventoryEntry>;
  deleteInventoryEntry?: Maybe<InventoryEntry>;
  createCart?: Maybe<Cart>;
  updateCart?: Maybe<Cart>;
  deleteCart?: Maybe<Cart>;
  replicateCart?: Maybe<Cart>;
  createMyCart?: Maybe<Cart>;
  updateMyCart?: Maybe<Cart>;
  deleteMyCart?: Maybe<Cart>;
  createOrderFromCart?: Maybe<Order>;
  updateOrder?: Maybe<Order>;
  deleteOrder?: Maybe<Order>;
  createMyOrderFromCart?: Maybe<Order>;
  createOrderEdit?: Maybe<OrderEdit>;
  updateOrderEdit?: Maybe<OrderEdit>;
  deleteOrderEdit?: Maybe<OrderEdit>;
  createShoppingList?: Maybe<ShoppingList>;
  updateShoppingList?: Maybe<ShoppingList>;
  deleteShoppingList?: Maybe<ShoppingList>;
  createMyShoppingList?: Maybe<ShoppingList>;
  updateMyShoppingList?: Maybe<ShoppingList>;
  deleteMyShoppingList?: Maybe<ShoppingList>;
  createPayment?: Maybe<Payment>;
  updatePayment?: Maybe<Payment>;
  deletePayment?: Maybe<Payment>;
  createMyPayment?: Maybe<MyPayment>;
  updateMyPayment?: Maybe<MyPayment>;
  deleteMyPayment?: Maybe<MyPayment>;
  updateProject?: Maybe<ProjectProjection>;
  /** beta feature */
  createStore?: Maybe<Store>;
  /** beta feature */
  updateStore?: Maybe<Store>;
  /** beta feature */
  deleteStore?: Maybe<Store>;
  createReview?: Maybe<Review>;
  updateReview?: Maybe<Review>;
  deleteReview?: Maybe<Review>;
  createSubscription?: Maybe<Subscription>;
  updateSubscription?: Maybe<Subscription>;
  deleteSubscription?: Maybe<Subscription>;
  createExtension?: Maybe<Extension>;
  updateExtension?: Maybe<Extension>;
  deleteExtension?: Maybe<Extension>;
  createApiClient?: Maybe<ApiClientWithSecret>;
  deleteApiClient?: Maybe<ApiClientWithoutSecret>;
};


export type MutationCreateCustomerGroupArgs = {
  draft: CustomerGroupDraft;
};


export type MutationUpdateCustomerGroupArgs = {
  version: Scalars['Long'];
  actions: Array<CustomerGroupUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteCustomerGroupArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateCategoryArgs = {
  draft: CategoryDraft;
};


export type MutationUpdateCategoryArgs = {
  version: Scalars['Long'];
  actions: Array<CategoryUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteCategoryArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateChannelArgs = {
  draft: ChannelDraft;
};


export type MutationUpdateChannelArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<ChannelUpdateAction>;
};


export type MutationDeleteChannelArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};


export type MutationCreateOrUpdateCustomObjectArgs = {
  draft: CustomObjectDraft;
};


export type MutationDeleteCustomObjectArgs = {
  version?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['String']>;
  personalDataErasure?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductTypeArgs = {
  draft: ProductTypeDraft;
};


export type MutationUpdateProductTypeArgs = {
  version: Scalars['Long'];
  actions: Array<ProductTypeUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteProductTypeArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateTypeDefinitionArgs = {
  draft: TypeDefinitionDraft;
};


export type MutationUpdateTypeDefinitionArgs = {
  version: Scalars['Long'];
  actions: Array<TypeUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteTypeDefinitionArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateShippingMethodArgs = {
  draft: ShippingMethodDraft;
};


export type MutationUpdateShippingMethodArgs = {
  version: Scalars['Long'];
  actions: Array<ShippingMethodUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteShippingMethodArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateZoneArgs = {
  draft: CreateZone;
};


export type MutationUpdateZoneArgs = {
  version: Scalars['Long'];
  actions: Array<ZoneUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteZoneArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateTaxCategoryArgs = {
  draft: TaxCategoryDraft;
};


export type MutationUpdateTaxCategoryArgs = {
  version: Scalars['Long'];
  actions: Array<TaxCategoryUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteTaxCategoryArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateDiscountCodeArgs = {
  draft: DiscountCodeDraft;
};


export type MutationUpdateDiscountCodeArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<DiscountCodeUpdateAction>;
};


export type MutationDeleteDiscountCodeArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};


export type MutationCreateCartDiscountArgs = {
  draft: CartDiscountDraft;
};


export type MutationUpdateCartDiscountArgs = {
  version: Scalars['Long'];
  actions: Array<CartDiscountUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteCartDiscountArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateProductDiscountArgs = {
  draft: ProductDiscountDraft;
};


export type MutationUpdateProductDiscountArgs = {
  version: Scalars['Long'];
  actions: Array<ProductDiscountUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteProductDiscountArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  draft: ProductDraft;
};


export type MutationUpdateProductArgs = {
  version: Scalars['Long'];
  actions: Array<ProductUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteProductArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateStateArgs = {
  draft: StateDraft;
};


export type MutationUpdateStateArgs = {
  version: Scalars['Long'];
  actions: Array<StateUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteStateArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCustomerSignUpArgs = {
  draft: CustomerSignUpDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerSignInArgs = {
  draft: CustomerSignInDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateCustomerArgs = {
  version: Scalars['Long'];
  actions: Array<CustomerUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteCustomerArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCustomerChangePasswordArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerResetPasswordArgs = {
  version?: Maybe<Scalars['Long']>;
  tokenValue: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerConfirmEmailArgs = {
  version?: Maybe<Scalars['Long']>;
  tokenValue: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerCreatePasswordResetTokenArgs = {
  email: Scalars['String'];
  ttlMinutes?: Maybe<Scalars['Int']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerCreateEmailVerificationTokenArgs = {
  id: Scalars['String'];
  version?: Maybe<Scalars['Long']>;
  ttlMinutes: Scalars['Int'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerSignMeUpArgs = {
  draft: CustomerSignMeUpDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerSignMeInArgs = {
  draft: CustomerSignMeInDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateMyCustomerArgs = {
  version: Scalars['Long'];
  actions: Array<MyCustomerUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationDeleteMyCustomerArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerChangeMyPasswordArgs = {
  version: Scalars['Long'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerConfirmMyEmailArgs = {
  tokenValue: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCustomerResetMyPasswordArgs = {
  tokenValue: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCreateInventoryEntryArgs = {
  draft: InventoryEntryDraft;
};


export type MutationUpdateInventoryEntryArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<InventoryEntryUpdateAction>;
};


export type MutationDeleteInventoryEntryArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};


export type MutationCreateCartArgs = {
  draft: CartDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateCartArgs = {
  version: Scalars['Long'];
  actions: Array<CartUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteCartArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationReplicateCartArgs = {
  reference: ReferenceInput;
  key?: Maybe<Scalars['String']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCreateMyCartArgs = {
  draft: MyCartDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateMyCartArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<MyCartUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationDeleteMyCartArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCreateOrderFromCartArgs = {
  draft: OrderCartCommand;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateOrderArgs = {
  version: Scalars['Long'];
  actions: Array<OrderUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type MutationDeleteOrderArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type MutationCreateMyOrderFromCartArgs = {
  draft: OrderMyCartCommand;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationCreateOrderEditArgs = {
  draft: OrderEditDraft;
};


export type MutationUpdateOrderEditArgs = {
  version: Scalars['Long'];
  actions: Array<OrderEditUpdateAction>;
  dryRun?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteOrderEditArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateShoppingListArgs = {
  draft: ShoppingListDraft;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
};


export type MutationUpdateShoppingListArgs = {
  version: Scalars['Long'];
  actions: Array<ShoppingListUpdateAction>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteShoppingListArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  storeKey?: Maybe<Scalars['KeyReferenceInput']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateMyShoppingListArgs = {
  draft: MyShoppingListDraft;
};


export type MutationUpdateMyShoppingListArgs = {
  version: Scalars['Long'];
  actions: Array<MyShoppingListUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteMyShoppingListArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreatePaymentArgs = {
  draft: PaymentDraft;
};


export type MutationUpdatePaymentArgs = {
  version: Scalars['Long'];
  actions: Array<PaymentUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeletePaymentArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateMyPaymentArgs = {
  draft: MyPaymentDraft;
};


export type MutationUpdateMyPaymentArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<MyPaymentUpdateAction>;
};


export type MutationDeleteMyPaymentArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};


export type MutationUpdateProjectArgs = {
  version: Scalars['Long'];
  actions: Array<ProjectSettingsUpdateAction>;
};


export type MutationCreateStoreArgs = {
  draft: CreateStore;
};


export type MutationUpdateStoreArgs = {
  version: Scalars['Long'];
  actions: Array<StoreUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteStoreArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateReviewArgs = {
  draft: ReviewDraft;
};


export type MutationUpdateReviewArgs = {
  version: Scalars['Long'];
  actions: Array<ReviewUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteReviewArgs = {
  version: Scalars['Long'];
  personalDataErasure?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateSubscriptionArgs = {
  draft: SubscriptionDraft;
};


export type MutationUpdateSubscriptionArgs = {
  version: Scalars['Long'];
  actions: Array<SubscriptionUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteSubscriptionArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateExtensionArgs = {
  draft: ExtensionDraft;
};


export type MutationUpdateExtensionArgs = {
  version: Scalars['Long'];
  actions: Array<ExtensionUpdateAction>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationDeleteExtensionArgs = {
  version: Scalars['Long'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MutationCreateApiClientArgs = {
  draft: CreateApiClient;
};


export type MutationDeleteApiClientArgs = {
  id: Scalars['String'];
};

export type MyCartDraft = {
  currency: Scalars['Currency'];
  country?: Maybe<Scalars['Country']>;
  inventoryMode?: Maybe<InventoryMode>;
  custom?: Maybe<CustomFieldsDraft>;
  customerEmail?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<AddressInput>;
  billingAddress?: Maybe<AddressInput>;
  shippingMethod?: Maybe<ResourceIdentifierInput>;
  taxMode?: Maybe<TaxMode>;
  locale?: Maybe<Scalars['Locale']>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  itemShippingAddresses?: Maybe<Array<AddressInput>>;
  discountCodes?: Maybe<Array<Scalars['String']>>;
  store?: Maybe<ResourceIdentifierInput>;
  lineItems?: Maybe<Array<MyLineItemDraft>>;
};

export type MyCartUpdateAction = {
  addDiscountCode?: Maybe<AddCartDiscountCode>;
  addItemShippingAddress?: Maybe<AddCartItemShippingAddress>;
  addLineItem?: Maybe<AddMyCartLineItem>;
  addPayment?: Maybe<AddCartPayment>;
  addShoppingList?: Maybe<AddCartShoppingList>;
  applyDeltaToLineItemShippingDetailsTargets?: Maybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeLineItemQuantity?: Maybe<ChangeCartLineItemQuantity>;
  changeTaxMode?: Maybe<ChangeMyCartTaxMode>;
  recalculate?: Maybe<RecalculateCart>;
  removeDiscountCode?: Maybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: Maybe<RemoveCartItemShippingAddress>;
  removeLineItem?: Maybe<RemoveCartLineItem>;
  removePayment?: Maybe<RemoveCartPayment>;
  setBillingAddress?: Maybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: Maybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: Maybe<SetCartBillingAddressCustomType>;
  setCountry?: Maybe<SetCartCountry>;
  setCustomField?: Maybe<SetCartCustomField>;
  setCustomType?: Maybe<SetCartCustomType>;
  setCustomerEmail?: Maybe<SetCartCustomerEmail>;
  setDeleteDaysAfterLastModification?: Maybe<SetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: Maybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: Maybe<SetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: Maybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: Maybe<SetCartLineItemDistributionChannel>;
  setLineItemShippingDetails?: Maybe<SetCartLineItemShippingDetails>;
  setLocale?: Maybe<SetCartLocale>;
  setShippingMethod?: Maybe<SetMyCartShippingMethod>;
  setShippingAddress?: Maybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: Maybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: Maybe<SetCartShippingAddressCustomType>;
  updateItemShippingAddress?: Maybe<UpdateCartItemShippingAddress>;
};

export type MyCustomerUpdateAction = {
  addAddress?: Maybe<AddCustomerAddress>;
  addBillingAddressId?: Maybe<AddCustomerBillingAddressId>;
  addShippingAddressId?: Maybe<AddCustomerShippingAddressId>;
  changeAddress?: Maybe<ChangeCustomerAddress>;
  changeEmail?: Maybe<ChangeCustomerEmail>;
  removeAddress?: Maybe<RemoveCustomerAddress>;
  removeBillingAddressId?: Maybe<RemoveCustomerBillingAddressId>;
  removeShippingAddressId?: Maybe<RemoveCustomerShippingAddressId>;
  setCompanyName?: Maybe<SetCustomerCompanyName>;
  setAddressCustomField?: Maybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: Maybe<SetCustomerAddressCustomType>;
  setCustomField?: Maybe<SetCustomerCustomField>;
  setCustomType?: Maybe<SetCustomerCustomType>;
  setLocale?: Maybe<SetCustomerLocale>;
  setDateOfBirth?: Maybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: Maybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: Maybe<SetCustomerDefaultShippingAddress>;
  setFirstName?: Maybe<SetCustomerFirstName>;
  setLastName?: Maybe<SetCustomerLastName>;
  setMiddleName?: Maybe<SetCustomerMiddleName>;
  setSalutation?: Maybe<SetCustomerSalutation>;
  setTitle?: Maybe<SetCustomerTitle>;
  setVatId?: Maybe<SetCustomerVatId>;
};

export type MyLineItemDraft = {
  productId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Long']>;
  variantId?: Maybe<Scalars['Int']>;
  supplyChannel?: Maybe<ResourceIdentifierInput>;
  distributionChannel?: Maybe<ResourceIdentifierInput>;
  custom?: Maybe<CustomFieldsDraft>;
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
  addedAt?: Maybe<Scalars['DateTime']>;
};

export type MyPaymentDraft = {
  amountPlanned: MoneyInput;
  paymentMethodInfo?: Maybe<PaymentMethodInfoInput>;
  custom?: Maybe<CustomFieldsDraft>;
  transaction?: Maybe<MyTransactionDraft>;
};

export type MyPaymentUpdateAction = {
  addTransaction?: Maybe<AddMyPaymentTransaction>;
  changeAmountPlanned?: Maybe<ChangePaymentAmountPlanned>;
  setCustomField?: Maybe<SetPaymentCustomField>;
  setMethodInfoInterface?: Maybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: Maybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: Maybe<SetPaymentMethodInfoName>;
};

export type MyShoppingListDraft = {
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  lineItems?: Maybe<Array<ShoppingListLineItemDraft>>;
  textLineItems?: Maybe<Array<TextLineItemDraft>>;
  custom?: Maybe<CustomFieldsDraft>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type MyShoppingListUpdateAction = {
  addLineItem?: Maybe<AddShoppingListLineItem>;
  addTextLineItem?: Maybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: Maybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: Maybe<ChangeShoppingListLineItemsOrder>;
  changeName?: Maybe<ChangeShoppingListName>;
  changeTextLineItemName?: Maybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: Maybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: Maybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: Maybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: Maybe<RemoveShoppingListTextLineItem>;
  setCustomField?: Maybe<SetShoppingListCustomField>;
  setCustomType?: Maybe<SetShoppingListCustomType>;
  setDeleteDaysAfterLastModification?: Maybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: Maybe<SetShoppingListDescription>;
  setLineItemCustomField?: Maybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetShoppingListLineItemCustomType>;
  setStore?: Maybe<SetShoppingListStore>;
  setTextLineItemCustomField?: Maybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: Maybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: Maybe<SetShoppingListTextLineItemDescription>;
};

export type MyTransactionDraft = {
  timestamp?: Maybe<Scalars['DateTime']>;
  type: TransactionType;
  amount: MoneyInput;
  interactionId?: Maybe<Scalars['String']>;
};

export type NotProcessed = OrderEditResult & {
  type: Scalars['String'];
};

export type NumberAttribute = Attribute & {
  value: Scalars['BigDecimal'];
  name: Scalars['String'];
};

export type NumberField = CustomField & {
  value: Scalars['BigDecimal'];
  name: Scalars['String'];
};

export type NumberType = FieldType & {
  name: Scalars['String'];
};

export type OrderBillingAddressSet = MessagePayload & {
  address?: Maybe<Address>;
  oldAddress?: Maybe<Address>;
  type: Scalars['String'];
};

export type OrderCartCommand = {
  id?: Maybe<Scalars['String']>;
  cart?: Maybe<ResourceIdentifierInput>;
  version: Scalars['Long'];
  paymentState?: Maybe<PaymentState>;
  orderState?: Maybe<OrderState>;
  state?: Maybe<ReferenceInput>;
  shipmentState?: Maybe<ShipmentState>;
  orderNumber?: Maybe<Scalars['String']>;
};

export type OrderCreated = MessagePayload & {
  order: Order;
  type: Scalars['String'];
};

export type OrderCustomLineItemAdded = MessagePayload & {
  customLineItem: CustomLineItem;
  type: Scalars['String'];
};

export type OrderCustomLineItemDiscountSet = MessagePayload & {
  customLineItemId: Scalars['String'];
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  type: Scalars['String'];
};

export type OrderCustomLineItemQuantityChanged = MessagePayload & {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  oldQuantity?: Maybe<Scalars['Long']>;
  type: Scalars['String'];
};

export type OrderCustomLineItemRemoved = MessagePayload & {
  customLineItemId: Scalars['String'];
  customLineItem?: Maybe<CustomLineItem>;
  type: Scalars['String'];
};

export type OrderCustomerEmailSet = MessagePayload & {
  email?: Maybe<Scalars['String']>;
  oldEmail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type OrderCustomerGroupSet = MessagePayload & {
  customerGroup?: Maybe<CustomerGroup>;
  oldCustomerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  oldCustomerGroupRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type OrderCustomerSet = MessagePayload & {
  customer?: Maybe<Customer>;
  oldCustomer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  oldCustomerGroup?: Maybe<CustomerGroup>;
  customerRef?: Maybe<Reference>;
  oldCustomerRef?: Maybe<Reference>;
  customerGroupRef?: Maybe<Reference>;
  oldCustomerGroupRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type OrderDeleted = MessagePayload & {
  order?: Maybe<Order>;
  type: Scalars['String'];
};

export type OrderDiscountCodeAdded = MessagePayload & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String'];
};

export type OrderDiscountCodeRemoved = MessagePayload & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String'];
};

export type OrderDiscountCodeStateSet = MessagePayload & {
  state: DiscountCodeState;
  oldState?: Maybe<DiscountCodeState>;
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String'];
};

export type OrderEditApplied = MessagePayload & {
  result: Applied;
  edit?: Maybe<OrderEdit>;
  editRef: Reference;
  type: Scalars['String'];
};

export type OrderEditDraft = {
  key?: Maybe<Scalars['String']>;
  resource: ReferenceInput;
  stagedActions: Array<StagedOrderUpdateAction>;
  custom?: Maybe<CustomFieldsDraft>;
  comment?: Maybe<Scalars['String']>;
  dryRun?: Maybe<Scalars['Boolean']>;
};

export type OrderEditUpdateAction = {
  addStagedAction?: Maybe<AddOrderEditStagedAction>;
  setComment?: Maybe<SetOrderEditComment>;
  setCustomField?: Maybe<SetOrderEditCustomField>;
  setCustomType?: Maybe<SetOrderEditCustomType>;
  setKey?: Maybe<SetOrderEditKey>;
  setStagedActions?: Maybe<SetOrderEditStagedActions>;
};

export type OrderExcerpt = {
  totalPrice: Money;
  taxedPrice?: Maybe<TaxedPrice>;
  version?: Maybe<Scalars['Long']>;
};

export type OrderImported = MessagePayload & {
  order: Order;
  type: Scalars['String'];
};

export type OrderLineItemAdded = MessagePayload & {
  lineItem: LineItem;
  addedQuantity: Scalars['Long'];
  type: Scalars['String'];
};

export type OrderLineItemDiscountSet = MessagePayload & {
  lineItemId: Scalars['String'];
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  totalPrice: Money;
  taxedPrice?: Maybe<TaxedItemPrice>;
  type: Scalars['String'];
};

export type OrderLineItemDistributionChannelSet = MessagePayload & {
  lineItemId: Scalars['String'];
  distributionChannel?: Maybe<Channel>;
  distributionChannelRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type OrderLineItemRemoved = MessagePayload & {
  lineItemId: Scalars['String'];
  removedQuantity: Scalars['Long'];
  newQuantity: Scalars['Long'];
  newState: Scalars['Set'];
  newTotalPrice: Money;
  newTaxedPrice?: Maybe<TaxedItemPrice>;
  newPrice?: Maybe<ProductPrice>;
  newShippingDetails?: Maybe<ItemShippingDetails>;
  type: Scalars['String'];
};

export type OrderMyCartCommand = {
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type OrderPaymentAdded = MessagePayload & {
  paymentRef: Reference;
  type: Scalars['String'];
};

export type OrderPaymentRemoved = MessagePayload & {
  paymentRef: Reference;
  removedPaymentInfo: Scalars['Boolean'];
  type: Scalars['String'];
};

export type OrderPaymentStateChanged = MessagePayload & {
  paymentState: PaymentState;
  oldPaymentState?: Maybe<PaymentState>;
  type: Scalars['String'];
};

export type OrderReturnShipmentStateChanged = MessagePayload & {
  returnItemId: Scalars['String'];
  returnShipmentState: ReturnShipmentState;
  type: Scalars['String'];
};

export type OrderShipmentStateChanged = MessagePayload & {
  shipmentState: ShipmentState;
  oldShipmentState?: Maybe<ShipmentState>;
  type: Scalars['String'];
};

export type OrderShippingAddressSet = MessagePayload & {
  address?: Maybe<Address>;
  oldAddress?: Maybe<Address>;
  type: Scalars['String'];
};

export type OrderShippingInfoSet = MessagePayload & {
  shippingInfo?: Maybe<ShippingInfo>;
  oldShippingInfo?: Maybe<ShippingInfo>;
  type: Scalars['String'];
};

export type OrderShippingRateInputSet = MessagePayload & {
  shippingRateInput?: Maybe<ShippingRateInput>;
  oldShippingRateInput?: Maybe<ShippingRateInput>;
  type: Scalars['String'];
};

export type OrderStateChanged = MessagePayload & {
  orderId: Scalars['String'];
  orderState: OrderState;
  oldOrderState?: Maybe<OrderState>;
  type: Scalars['String'];
};

export type OrderStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  state?: Maybe<State>;
  oldState?: Maybe<State>;
  stateRef: Reference;
  oldStateRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type OrderStoreSet = MessagePayload & {
  store?: Maybe<Store>;
  oldStore?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  oldStoreRef?: Maybe<KeyReference>;
  type: Scalars['String'];
};

export type OrderUpdateAction = {
  addDelivery?: Maybe<AddOrderDelivery>;
  addItemShippingAddress?: Maybe<AddOrderItemShippingAddress>;
  addParcelToDelivery?: Maybe<AddOrderParcelToDelivery>;
  addPayment?: Maybe<AddOrderPayment>;
  addReturnInfo?: Maybe<AddOrderReturnInfo>;
  changeOrderState?: Maybe<ChangeOrderState>;
  changePaymentState?: Maybe<ChangeOrderPaymentState>;
  changeShipmentState?: Maybe<ChangeOrderShipmentState>;
  importCustomLineItemState?: Maybe<ImportOrderCustomLineItemState>;
  importLineItemState?: Maybe<ImportOrderLineItemState>;
  removeDelivery?: Maybe<RemoveOrderDelivery>;
  removeItemShippingAddress?: Maybe<RemoveOrderItemShippingAddress>;
  removeParcelFromDelivery?: Maybe<RemoveOrderParcelFromDelivery>;
  removePayment?: Maybe<RemoveOrderPayment>;
  setBillingAddress?: Maybe<SetOrderBillingAddress>;
  setBillingAddressCustomField?: Maybe<SetOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: Maybe<SetOrderBillingAddressCustomType>;
  setCustomField?: Maybe<SetOrderCustomField>;
  setCustomLineItemCustomField?: Maybe<SetOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: Maybe<SetOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: Maybe<SetOrderCustomLineItemShippingDetails>;
  setCustomType?: Maybe<SetOrderCustomType>;
  setCustomerEmail?: Maybe<SetOrderCustomerEmail>;
  setCustomerId?: Maybe<SetOrderCustomerId>;
  setDeliveryAddress?: Maybe<SetOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: Maybe<SetOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: Maybe<SetOrderDeliveryAddressCustomType>;
  setDeliveryItems?: Maybe<SetOrderDeliveryItems>;
  setItemShippingAddressCustomField?: Maybe<SetOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: Maybe<SetOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: Maybe<SetOrderLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetOrderLineItemCustomType>;
  setLineItemShippingDetails?: Maybe<SetOrderLineItemShippingDetails>;
  setLocale?: Maybe<SetOrderLocale>;
  setOrderNumber?: Maybe<SetOrderNumber>;
  setParcelItems?: Maybe<SetOrderParcelItems>;
  setParcelMeasurements?: Maybe<SetOrderParcelMeasurements>;
  setParcelTrackingData?: Maybe<SetOrderParcelTrackingData>;
  setReturnPaymentState?: Maybe<SetOrderReturnPaymentState>;
  setReturnShipmentState?: Maybe<SetOrderReturnShipmentState>;
  setShippingAddress?: Maybe<SetOrderShippingAddress>;
  setShippingAddressCustomField?: Maybe<SetOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: Maybe<SetOrderShippingAddressCustomType>;
  setStore?: Maybe<SetOrderStore>;
  transitionCustomLineItemState?: Maybe<TransitionOrderCustomLineItemState>;
  transitionLineItemState?: Maybe<TransitionOrderLineItemState>;
  transitionState?: Maybe<TransitionOrderState>;
  updateItemShippingAddress?: Maybe<UpdateOrderItemShippingAddress>;
  updateSyncInfo?: Maybe<UpdateOrderSyncInfo>;
};

export type ParcelAddedToDelivery = MessagePayload & {
  delivery: Delivery;
  parcel: Parcel;
  type: Scalars['String'];
};

export type ParcelData = {
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
  items: Array<DeliveryItem>;
};

export type ParcelItemsUpdated = MessagePayload & {
  deliveryId: Scalars['String'];
  parcelId: Scalars['String'];
  items: Array<DeliveryItem>;
  oldItems: Array<DeliveryItem>;
  type: Scalars['String'];
};

export type ParcelMeasurementsDraftType = {
  heightInMillimeter?: Maybe<Scalars['Int']>;
  lengthInMillimeter?: Maybe<Scalars['Int']>;
  widthInMillimeter?: Maybe<Scalars['Int']>;
  weightInGram?: Maybe<Scalars['Int']>;
};

export type ParcelMeasurementsUpdated = MessagePayload & {
  deliveryId: Scalars['String'];
  parcelId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurements>;
  type: Scalars['String'];
};

export type ParcelRemovedFromDelivery = MessagePayload & {
  deliveryId: Scalars['String'];
  parcel: Parcel;
  type: Scalars['String'];
};

export type ParcelTrackingDataUpdated = MessagePayload & {
  deliveryId: Scalars['String'];
  parcelId: Scalars['String'];
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String'];
};

export type PaymentCreated = MessagePayload & {
  payment: Payment;
  type: Scalars['String'];
};

export type PaymentDraft = {
  amountPlanned: MoneyInput;
  paymentMethodInfo?: Maybe<PaymentMethodInfoInput>;
  custom?: Maybe<CustomFieldsDraft>;
  key?: Maybe<Scalars['String']>;
  customer?: Maybe<ResourceIdentifierInput>;
  anonymousId?: Maybe<Scalars['String']>;
  interfaceId?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<PaymentStatusInput>;
  transactions?: Maybe<Array<TransactionDraft>>;
  interfaceInteractions?: Maybe<Array<CustomFieldsDraft>>;
};

export type PaymentInteractionAdded = MessagePayload & {
  interaction: CustomFieldsType;
  type: Scalars['String'];
};

export type PaymentMethodInfoInput = {
  paymentInterface?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type PaymentStatusInput = {
  interfaceCode?: Maybe<Scalars['String']>;
  interfaceText?: Maybe<Scalars['String']>;
  state?: Maybe<ReferenceInput>;
};

export type PaymentStatusInterfaceCodeSet = MessagePayload & {
  paymentId: Scalars['String'];
  interfaceCode?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type PaymentStatusStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type PaymentTransactionAdded = MessagePayload & {
  transaction: Transaction;
  type: Scalars['String'];
};

export type PaymentTransactionStateChanged = MessagePayload & {
  transactionId: Scalars['String'];
  state: TransactionState;
  type: Scalars['String'];
};

export type PaymentUpdateAction = {
  addInterfaceInteraction?: Maybe<AddPaymentInterfaceInteraction>;
  addTransaction?: Maybe<AddPaymentTransaction>;
  changeAmountPlanned?: Maybe<ChangePaymentAmountPlanned>;
  changeTransactionInteractionId?: Maybe<ChangePaymentTransactionInteractionId>;
  changeTransactionState?: Maybe<ChangePaymentTransactionState>;
  changeTransactionTimestamp?: Maybe<ChangePaymentTransactionTimestamp>;
  setAmountPaid?: Maybe<SetPaymentAmountPaid>;
  setAmountRefunded?: Maybe<SetPaymentAmountRefunded>;
  setAnonymousId?: Maybe<SetPaymentAnonymousId>;
  setAuthorization?: Maybe<SetPaymentAuthorization>;
  setCustomField?: Maybe<SetPaymentCustomField>;
  setCustomType?: Maybe<SetPaymentCustomType>;
  setCustomer?: Maybe<SetPaymentCustomer>;
  setExternalId?: Maybe<SetPaymentExternalId>;
  setInterfaceId?: Maybe<SetPaymentInterfaceId>;
  setKey?: Maybe<SetPaymentKey>;
  setMethodInfoInterface?: Maybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: Maybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: Maybe<SetPaymentMethodInfoName>;
  setStatusInterfaceCode?: Maybe<SetPaymentStatusInterfaceCode>;
  setStatusInterfaceText?: Maybe<SetPaymentStatusInterfaceText>;
  transitionState?: Maybe<TransitionPaymentState>;
};

export type PlainEnumValueDraft = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type PlatformFormat = NotificationFormat & {
  type: Scalars['String'];
};

export type PlatformFormatInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type Point = Geometry & {
  type: Scalars['String'];
  coordinates: Array<Scalars['Float']>;
};

export type PreviewFailure = OrderEditResult & {
  type: Scalars['String'];
  errors: Array<Scalars['Json']>;
};

export type PreviewSuccess = OrderEditResult & {
  type: Scalars['String'];
  preview: Order;
};

export type PriceFunction = {
  function: Scalars['String'];
  currencyCode: Scalars['Currency'];
};

export type PriceFunctionDraft = {
  function: Scalars['String'];
  currencyCode: Scalars['Currency'];
};

export type ProductAddedToCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductAttributeInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductCreated = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  type: Scalars['String'];
};

export type ProductDeleted = MessagePayload & {
  removedImageUrls: Scalars['Set'];
  currentProjection?: Maybe<ProductProjectionMessagePayload>;
  type: Scalars['String'];
};

export type ProductDiscountDraft = {
  value: ProductDiscountValueInput;
  predicate: Scalars['String'];
  sortOrder: Scalars['String'];
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
};

export type ProductDiscountUpdateAction = {
  changeIsActive?: Maybe<ChangeProductDiscountIsActive>;
  changeName?: Maybe<ChangeProductDiscountName>;
  changePredicate?: Maybe<ChangeProductDiscountPredicate>;
  changeSortOrder?: Maybe<ChangeProductDiscountSortOrder>;
  changeValue?: Maybe<ChangeProductDiscountValue>;
  setDescription?: Maybe<SetProductDiscountDescription>;
  setKey?: Maybe<SetProductDiscountKey>;
  setValidFrom?: Maybe<SetProductDiscountValidFrom>;
  setValidFromAndUntil?: Maybe<SetProductDiscountValidFromAndUntil>;
  setValidUntil?: Maybe<SetProductDiscountValidUntil>;
};

export type ProductDiscountValueInput = {
  relative?: Maybe<RelativeDiscountValueInput>;
  absolute?: Maybe<AbsoluteDiscountValueInput>;
  external?: Maybe<ExternalDiscountValueInput>;
};

export type ProductDraft = {
  name: Array<LocalizedStringItemInputType>;
  productType: ResourceIdentifierInput;
  slug: Array<LocalizedStringItemInputType>;
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  categories?: Maybe<Array<ResourceIdentifierInput>>;
  categoryOrderHints?: Maybe<Array<CategoryOrderHintInput>>;
  metaTitle?: Maybe<Array<LocalizedStringItemInputType>>;
  metaDescription?: Maybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: Maybe<Array<LocalizedStringItemInputType>>;
  masterVariant?: Maybe<ProductVariantInput>;
  variants?: Maybe<Array<ProductVariantInput>>;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  state?: Maybe<ResourceIdentifierInput>;
  searchKeywords?: Maybe<Array<SearchKeywordInput>>;
  publish?: Maybe<Scalars['Boolean']>;
};

export type ProductImageAdded = MessagePayload & {
  variantId: Scalars['Int'];
  image: Image;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductPriceDataInput = {
  value: BaseMoneyInput;
  country?: Maybe<Scalars['Country']>;
  customerGroup?: Maybe<ReferenceInput>;
  channel?: Maybe<ResourceIdentifierInput>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  tiers?: Maybe<Array<ProductPriceTierInput>>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type ProductPriceDiscountUpdateMessagePayload = {
  variantId: Scalars['Int'];
  variantKey?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  priceId: Scalars['String'];
  discounted?: Maybe<DiscountedProductPriceValue>;
  staged: Scalars['Boolean'];
};

export type ProductPriceDiscountsSet = MessagePayload & {
  updatedPrices: Array<ProductPriceDiscountUpdateMessagePayload>;
  type: Scalars['String'];
};

export type ProductPriceExternalDiscountSet = MessagePayload & {
  variantId: Scalars['Int'];
  variantKey?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  priceId: Scalars['String'];
  discounted?: Maybe<DiscountedProductPriceValue>;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductPriceTierInput = {
  minimumQuantity: Scalars['Int'];
  value: BaseMoneyInput;
};

export type ProductProjectionMessagePayload = {
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  productTypeRef: Reference;
  productType?: Maybe<ProductTypeDefinition>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  categoryOrderHints: Array<CategoryOrderHint>;
  categoriesRef: Array<Reference>;
  categories: Array<Category>;
  searchKeywords: Array<SearchKeywords>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  hasStagedChanges: Scalars['Boolean'];
  published: Scalars['Boolean'];
  masterData: ProductVariant;
  variants: Array<ProductVariant>;
  taxCategoryRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  stateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
};


export type ProductProjectionMessagePayloadNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductProjectionMessagePayloadDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductProjectionMessagePayloadSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductProjectionMessagePayloadMetaTitleArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductProjectionMessagePayloadMetaKeywordsArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductProjectionMessagePayloadMetaDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ProductPublished = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  removedImageUrls: Array<Scalars['String']>;
  scope: PublishScope;
  type: Scalars['String'];
};

export type ProductReferenceIdentifier = {
  typeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type ProductRemovedFromCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductRevertedStagedChanges = MessagePayload & {
  removedImageUrls: Scalars['Set'];
  type: Scalars['String'];
};

export type ProductSlugChanged = MessagePayload & {
  slug?: Maybe<Scalars['String']>;
  oldSlug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  type: Scalars['String'];
};


export type ProductSlugChangedSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductSlugChangedOldSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ProductStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String'];
};

export type ProductTypeDraft = {
  name: Scalars['String'];
  description: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  attributeDefinitions?: Maybe<Array<AttributeDefinitionDraft>>;
};

export type ProductTypeUpdateAction = {
  setKey?: Maybe<SetKey>;
  changeName?: Maybe<ChangeName>;
  changeDescription?: Maybe<ChangeDescription>;
  removeAttributeDefinition?: Maybe<RemoveAttributeDefinition>;
  changeLabel?: Maybe<ChangeLabel>;
  setInputTip?: Maybe<SetInputTip>;
  changeIsSearchable?: Maybe<ChangeIsSearchable>;
  changeInputHint?: Maybe<ChangeInputHint>;
  addAttributeDefinition?: Maybe<AddAttributeDefinition>;
  changeAttributeOrder?: Maybe<ChangeAttributeOrder>;
  changeAttributeOrderByName?: Maybe<ChangeAttributeOrderByName>;
  removeEnumValues?: Maybe<RemoveEnumValues>;
  addPlainEnumValue?: Maybe<AddPlainEnumValue>;
  changePlainEnumValueLabel?: Maybe<ChangePlainEnumValueLabel>;
  changePlainEnumValueOrder?: Maybe<ChangePlainEnumValueOrder>;
  addLocalizedEnumValue?: Maybe<AddLocalizedEnumValue>;
  changeLocalizedEnumValueLabel?: Maybe<ChangeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: Maybe<ChangeLocalizedEnumValueOrder>;
  changeAttributeName?: Maybe<ChangeAttributeName>;
  changeEnumKey?: Maybe<ChangeEnumKey>;
};

export type ProductUnpublished = MessagePayload & {
  type: Scalars['String'];
};

export type ProductUpdateAction = {
  moveImageToPosition?: Maybe<MoveProductImageToPosition>;
  setSearchKeywords?: Maybe<SetSearchKeywords>;
  revertStagedChanges?: Maybe<RevertStagedChanges>;
  revertStagedVariantChanges?: Maybe<RevertStagedVariantChanges>;
  publish?: Maybe<PublishProduct>;
  unpublish?: Maybe<UnpublishProduct>;
  transitionState?: Maybe<TransitionProductState>;
  addAsset?: Maybe<AddProductAsset>;
  addExternalImage?: Maybe<AddProductExternalImage>;
  addPrice?: Maybe<AddProductPrice>;
  addToCategory?: Maybe<AddProductToCategory>;
  addVariant?: Maybe<AddProductVariant>;
  changeAssetName?: Maybe<ChangeProductAssetName>;
  changeAssetOrder?: Maybe<ChangeProductAssetOrder>;
  changeMasterVariant?: Maybe<ChangeProductMasterVariant>;
  changeImageLabel?: Maybe<ChangeProductImageLabel>;
  changeName?: Maybe<ChangeProductName>;
  changePrice?: Maybe<ChangeProductPrice>;
  changeSlug?: Maybe<ChangeProductSlug>;
  removeAsset?: Maybe<RemoveProductAsset>;
  removeFromCategory?: Maybe<RemoveProductFromCategory>;
  removeImage?: Maybe<RemoveProductImage>;
  removePrice?: Maybe<RemoveProductPrice>;
  removeVariant?: Maybe<RemoveProductVariant>;
  setAssetCustomField?: Maybe<SetProductAssetCustomField>;
  setAssetCustomType?: Maybe<SetProductAssetCustomType>;
  setAssetDescription?: Maybe<SetProductAssetDescription>;
  setAssetKey?: Maybe<SetProductAssetKey>;
  setAssetSources?: Maybe<SetProductAssetSources>;
  setAssetTags?: Maybe<SetProductAssetTags>;
  setCategoryOrderHint?: Maybe<SetProductCategoryOrderHint>;
  setDiscountedPrice?: Maybe<SetProductDiscountedPrice>;
  setAttribute?: Maybe<SetProductAttribute>;
  setAttributeInAllVariants?: Maybe<SetProductAttributeInAllVariants>;
  setDescription?: Maybe<SetProductDescription>;
  setImageLabel?: Maybe<SetProductImageLabel>;
  setKey?: Maybe<SetProductKey>;
  setMetaAttributes?: Maybe<SetProductMetaAttributes>;
  setMetaDescription?: Maybe<SetProductMetaDescription>;
  setMetaKeywords?: Maybe<SetProductMetaKeywords>;
  setMetaTitle?: Maybe<SetProductMetaTitle>;
  setProductPriceCustomField?: Maybe<SetProductPriceCustomField>;
  setProductPriceCustomType?: Maybe<SetProductPriceCustomType>;
  setPrices?: Maybe<SetProductPrices>;
  setSku?: Maybe<SetProductSku>;
  setTaxCategory?: Maybe<SetProductTaxCategory>;
  setProductVariantKey?: Maybe<SetProductVariantKey>;
};

export type ProductVariantAdded = MessagePayload & {
  variant: ProductVariant;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductVariantDeleted = MessagePayload & {
  removedImageUrls: Scalars['Set'];
  variant?: Maybe<ProductVariant>;
  type: Scalars['String'];
};

export type ProductVariantInput = {
  sku?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  prices?: Maybe<Array<ProductPriceDataInput>>;
  images?: Maybe<Array<ImageInput>>;
  attributes?: Maybe<Array<ProductAttributeInput>>;
  assets?: Maybe<Array<AssetDraftInput>>;
};

export type ProjectSettingsUpdateAction = {
  changeCartsConfiguration?: Maybe<ChangeProjectSettingsCartsConfiguration>;
  changeCountries?: Maybe<ChangeProjectSettingsCountries>;
  changeCountryTaxRateFallbackEnabled?: Maybe<ChangeProjectSettingsCountryTaxRateFallbackEnabled>;
  changeCurrencies?: Maybe<ChangeProjectSettingsCurrencies>;
  changeLanguages?: Maybe<ChangeProjectSettingsLanguages>;
  changeMessagesConfiguration?: Maybe<ChangeProjectSettingsMessagesConfiguration>;
  changeMessagesEnabled?: Maybe<ChangeProjectSettingsMessagesEnabled>;
  changeName?: Maybe<ChangeProjectSettingsName>;
  changeProductSearchIndexingEnabled?: Maybe<ChangeProjectSettingsProductSearchIndexingEnabled>;
  changeShoppingListsConfiguration?: Maybe<ChangeProjectSettingsShoppingListsConfiguration>;
  setExternalOAuth?: Maybe<SetProjectSettingsExternalOAuth>;
  setShippingRateInputType?: Maybe<SetProjectSettingsShippingRateInputType>;
};

export type PublishProduct = {
  scope?: Maybe<PublishScope>;
};

export enum PublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices'
}

export type RecalculateCart = {
  updateProductData?: Maybe<Scalars['Boolean']>;
};

export type RecalculateStagedOrder = {
  updateProductData?: Maybe<Scalars['Boolean']>;
};

export type RecalculateStagedOrderOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  updateProductData: Scalars['Boolean'];
};

export type ReferenceAttribute = Attribute & {
  typeId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ReferenceField = CustomField & {
  typeId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ReferenceId = {
  typeId: Scalars['String'];
  id: Scalars['String'];
};

export type ReferenceInput = {
  typeId: Scalars['String'];
  id: Scalars['String'];
};

export type ReferenceType = FieldType & {
  referenceTypeId: Scalars['String'];
  name: Scalars['String'];
};

export type ReferenceTypeDefinitionDraft = {
  referenceTypeId: Scalars['String'];
};

export type RelativeDiscountValue = CartDiscountValue & ProductDiscountValue & {
  permyriad: Scalars['Int'];
  type: Scalars['String'];
};

export type RelativeDiscountValueInput = {
  permyriad: Scalars['Int'];
};

export type RemoveCartCustomLineItem = {
  customLineItemId: Scalars['String'];
};

export type RemoveCartDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveCartItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveCartLineItem = {
  lineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Long']>;
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
  shippingDetailsToRemove?: Maybe<ItemShippingDetailsDraft>;
};

export type RemoveCartPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveCategoryAsset = {
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type RemoveChannelRoles = {
  roles: Array<ChannelRole>;
};

export type RemoveCustomerAddress = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type RemoveCustomerBillingAddressId = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type RemoveCustomerShippingAddressId = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type RemoveCustomerStore = {
  store: ResourceIdentifierInput;
};

export type RemoveInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type RemoveOrderDelivery = {
  deliveryId: Scalars['String'];
};

export type RemoveOrderItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveOrderParcelFromDelivery = {
  parcelId: Scalars['String'];
};

export type RemoveOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveProductAsset = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type RemoveProductFromCategory = {
  category: ResourceIdentifierInput;
  staged?: Maybe<Scalars['Boolean']>;
};

export type RemoveProductImage = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  staged?: Maybe<Scalars['Boolean']>;
};

export type RemoveProductPrice = {
  priceId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  price?: Maybe<ProductPriceDataInput>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type RemoveProductVariant = {
  id?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type RemoveShippingMethodShippingRate = {
  zone: ResourceIdentifierInput;
  shippingRate: ShippingRateDraft;
};

export type RemoveShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type RemoveShoppingListLineItem = {
  lineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
};

export type RemoveShoppingListTextLineItem = {
  textLineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
};

export type RemoveStagedOrderCustomLineItem = {
  customLineItemId: Scalars['String'];
};

export type RemoveStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
};

export type RemoveStagedOrderDelivery = {
  deliveryId: Scalars['String'];
};

export type RemoveStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
};

export type RemoveStagedOrderDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String'];
};

export type RemoveStagedOrderItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  addressKey: Scalars['String'];
};

export type RemoveStagedOrderLineItem = {
  lineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Long']>;
  externalPrice?: Maybe<BaseMoneyInput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
  shippingDetailsToRemove?: Maybe<ItemShippingDetailsDraftType>;
};

export type RemoveStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Long']>;
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  shippingDetailsToRemove?: Maybe<ItemShippingDetailsDraftOutput>;
};

export type RemoveStagedOrderParcelFromDelivery = {
  parcelId: Scalars['String'];
};

export type RemoveStagedOrderParcelFromDeliveryOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  parcelId: Scalars['String'];
};

export type RemoveStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  paymentResId: ResourceIdentifier;
};

export type RemoveStateRoles = {
  roles: Array<StateRole>;
};

export type RemoveStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type RemoveStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type RemoveTypeFieldDefinition = {
  fieldName: Scalars['String'];
};

export type RemoveZoneLocation = {
  location: ZoneLocation;
};

export type ResourceIdentifier = {
  typeId: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ResourceIdentifierInput = {
  typeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type ReturnInfoAdded = MessagePayload & {
  returnInfo: ReturnInfo;
  type: Scalars['String'];
};

export type ReturnItemDraftType = {
  quantity: Scalars['Long'];
  lineItemId?: Maybe<Scalars['String']>;
  customLineItemId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  shipmentState: ReturnShipmentState;
};

export type ReturnItemDraftTypeOutput = {
  quantity: Scalars['Long'];
  lineItemId?: Maybe<Scalars['String']>;
  customLineItemId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  shipmentState: ReturnShipmentState;
};

export type RevertStagedChanges = {
  dummy?: Maybe<Scalars['String']>;
};

export type RevertStagedVariantChanges = {
  variantId: Scalars['Int'];
};

export type ReviewCreated = MessagePayload & {
  review: Review;
  type: Scalars['String'];
};

export type ReviewDraft = {
  key?: Maybe<Scalars['String']>;
  uniquenessValue?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['Locale']>;
  authorName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  target?: Maybe<TargetReferenceInput>;
  state?: Maybe<ResourceIdentifierInput>;
  rating?: Maybe<Scalars['Int']>;
  customer?: Maybe<ResourceIdentifierInput>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type ReviewRatingSet = MessagePayload & {
  oldRating?: Maybe<Scalars['Int']>;
  newRating?: Maybe<Scalars['Int']>;
  includedInStatistics: Scalars['Boolean'];
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type ReviewStateTransition = MessagePayload & {
  oldIncludedInStatistics: Scalars['Boolean'];
  newIncludedInStatistics: Scalars['Boolean'];
  force: Scalars['Boolean'];
  target?: Maybe<ReviewTarget>;
  oldState?: Maybe<State>;
  newState?: Maybe<State>;
  targetRef?: Maybe<Reference>;
  oldStateRef?: Maybe<Reference>;
  newStateRef: Reference;
  type: Scalars['String'];
};

export type ReviewUpdateAction = {
  setAuthorName?: Maybe<SetReviewAuthorName>;
  setCustomField?: Maybe<SetReviewCustomField>;
  setCustomType?: Maybe<SetReviewCustomType>;
  setCustomer?: Maybe<SetReviewCustomer>;
  setKey?: Maybe<SetReviewKey>;
  setLocale?: Maybe<SetReviewLocale>;
  setRating?: Maybe<SetReviewRating>;
  setTarget?: Maybe<SetReviewTarget>;
  setText?: Maybe<SetReviewText>;
  setTitle?: Maybe<SetReviewTitle>;
  transitionState?: Maybe<TransitionReviewState>;
};

export type SnsDestination = Destination & {
  topicArn: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  type: Scalars['String'];
};

export type SnsDestinationInput = {
  topicArn: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
};

export type SqsDestination = Destination & {
  queueUrl: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  region: Scalars['String'];
  type: Scalars['String'];
};

export type SqsDestinationInput = {
  queueUrl: Scalars['String'];
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  region: Scalars['String'];
};

export type ScoreShippingRateInput = ShippingRateInput & {
  score: Scalars['Int'];
  type: Scalars['String'];
};

export type ScoreShippingRateInputDraft = {
  score: Scalars['Int'];
};

export type ScoreShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  score: Scalars['Int'];
  type: Scalars['String'];
};

export type SearchKeywordInput = {
  locale: Scalars['Locale'];
  keywords: Array<CustomSuggestTokenizerInput>;
};

/** In order to decide which of the matching items will actually be discounted */
export enum SelectionMode {
  MostExpensive = 'MostExpensive',
  Cheapest = 'Cheapest'
}


export type SetCartAnonymousId = {
  anonymousId?: Maybe<Scalars['String']>;
};

export type SetCartBillingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetCartBillingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartBillingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartCountry = {
  country?: Maybe<Scalars['Country']>;
};

export type SetCartCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
};

export type SetCartCustomLineItemTaxAmount = {
  customLineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetCartCustomLineItemTaxRate = {
  customLineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetCartCustomShippingMethod = {
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetCartCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartCustomerEmail = {
  email?: Maybe<Scalars['String']>;
};

export type SetCartCustomerGroup = {
  customerGroup?: Maybe<ResourceIdentifierInput>;
};

export type SetCartCustomerId = {
  customerId?: Maybe<Scalars['String']>;
};

export type SetCartDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type SetCartDiscountCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartDiscountCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartDiscountDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetCartDiscountKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetCartDiscountValidFrom = {
  validFrom?: Maybe<Scalars['DateTime']>;
};

export type SetCartDiscountValidFromAndUntil = {
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetCartDiscountValidUntil = {
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetCartItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetCartLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartLineItemCustomType = {
  lineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartLineItemDistributionChannel = {
  lineItemId: Scalars['String'];
  distributionChannel?: Maybe<ResourceIdentifierInput>;
};

export type SetCartLineItemPrice = {
  lineItemId: Scalars['String'];
  externalPrice?: Maybe<BaseMoneyInput>;
};

export type SetCartLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraft>;
};

export type SetCartLineItemTaxAmount = {
  lineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetCartLineItemTaxRate = {
  lineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetCartLineItemTotalPrice = {
  lineItemId: Scalars['String'];
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
};

export type SetCartLocale = {
  locale?: Maybe<Scalars['Locale']>;
};

export type SetCartShippingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetCartShippingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCartShippingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCartShippingMethod = {
  shippingMethod?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetCartShippingMethodTaxAmount = {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetCartShippingMethodTaxRate = {
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetCartShippingRateInput = {
  shippingRateInput?: Maybe<ShippingRateInputDraft>;
};

export type SetCartTotalTax = {
  externalTotalGross?: Maybe<MoneyInput>;
  externalTaxPortions?: Maybe<Array<TaxPortionDraft>>;
};

export type SetCategoryAssetCustomField = {
  value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetCategoryAssetCustomType = {
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  type?: Maybe<ResourceIdentifierInput>;
  fields?: Maybe<Array<CustomFieldInput>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetCategoryAssetDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetCategoryAssetKey = {
  assetKey?: Maybe<Scalars['String']>;
  assetId: Scalars['String'];
};

export type SetCategoryAssetSources = {
  sources?: Maybe<Array<AssetSourceInput>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetCategoryAssetTags = {
  tags?: Maybe<Array<Scalars['String']>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetCategoryCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCategoryCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCategoryDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryExternalId = {
  externalId?: Maybe<Scalars['String']>;
};

export type SetCategoryKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetCategoryMetaDescription = {
  metaDescription?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaKeywords = {
  metaKeywords?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaTitle = {
  metaTitle?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetChannelAddress = {
  address?: Maybe<AddressInput>;
};

export type SetChannelAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetChannelAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetChannelCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetChannelCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetChannelGeoLocation = {
  geoLocation?: Maybe<GeometryInput>;
};

export type SetChannelRoles = {
  roles: Array<ChannelRole>;
};

export type SetCustomerAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  addressId: Scalars['String'];
};

export type SetCustomerAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
  addressId: Scalars['String'];
};

export type SetCustomerCompanyName = {
  companyName?: Maybe<Scalars['String']>;
};

export type SetCustomerCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCustomerCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetCustomerDateOfBirth = {
  dateOfBirth?: Maybe<Scalars['Date']>;
};

export type SetCustomerDefaultBillingAddress = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type SetCustomerDefaultShippingAddress = {
  addressId?: Maybe<Scalars['String']>;
  addressKey?: Maybe<Scalars['String']>;
};

export type SetCustomerExternalId = {
  externalId?: Maybe<Scalars['String']>;
};

export type SetCustomerFirstName = {
  firstName?: Maybe<Scalars['String']>;
};

export type SetCustomerGroup = {
  customerGroup?: Maybe<ResourceIdentifierInput>;
};

export type SetCustomerGroupCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetCustomerGroupCustomType = {
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  type?: Maybe<ResourceIdentifierInput>;
  fields?: Maybe<Array<CustomFieldInput>>;
};

export type SetCustomerGroupKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetCustomerKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetCustomerLastName = {
  lastName?: Maybe<Scalars['String']>;
};

export type SetCustomerLocale = {
  locale?: Maybe<Scalars['Locale']>;
};

export type SetCustomerMiddleName = {
  middleName?: Maybe<Scalars['String']>;
};

export type SetCustomerNumber = {
  customerNumber?: Maybe<Scalars['String']>;
};

export type SetCustomerSalutation = {
  salutation?: Maybe<Scalars['String']>;
};

export type SetCustomerStores = {
  stores: Array<ResourceIdentifierInput>;
};

export type SetCustomerTitle = {
  title?: Maybe<Scalars['String']>;
};

export type SetCustomerVatId = {
  vatId?: Maybe<Scalars['String']>;
};

export type SetDiscountCodeCartPredicate = {
  cartPredicate?: Maybe<Scalars['String']>;
};

export type SetDiscountCodeCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetDiscountCodeCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetDiscountCodeDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeMaxApplications = {
  maxApplications?: Maybe<Scalars['Long']>;
};

export type SetDiscountCodeMaxApplicationsPerCustomer = {
  maxApplicationsPerCustomer?: Maybe<Scalars['Long']>;
};

export type SetDiscountCodeName = {
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeValidFrom = {
  validFrom?: Maybe<Scalars['DateTime']>;
};

export type SetDiscountCodeValidFromAndUntil = {
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetDiscountCodeValidUntil = {
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetExtensionKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetExtensionTimeoutInMs = {
  timeoutInMs?: Maybe<Scalars['Int']>;
};

export type SetInventoryEntryCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetInventoryEntryCustomType = {
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  type?: Maybe<ResourceIdentifierInput>;
  fields?: Maybe<Array<CustomFieldInput>>;
};

export type SetInventoryEntryExpectedDelivery = {
  expectedDelivery?: Maybe<Scalars['DateTime']>;
};

export type SetInventoryEntryRestockableInDays = {
  restockableInDays?: Maybe<Scalars['Int']>;
};

export type SetInventoryEntrySupplyChannel = {
  supplyChannel?: Maybe<ResourceIdentifierInput>;
};

export type SetMyCartShippingMethod = {
  shippingMethod?: Maybe<ResourceIdentifierInput>;
};

export type SetOrderBillingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetOrderBillingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderBillingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
};

export type SetOrderCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderCustomerEmail = {
  email?: Maybe<Scalars['String']>;
};

export type SetOrderCustomerId = {
  customerId?: Maybe<Scalars['String']>;
};

export type SetOrderDeliveryAddress = {
  deliveryId: Scalars['String'];
  address?: Maybe<AddressInput>;
};

export type SetOrderDeliveryAddressCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderDeliveryAddressCustomType = {
  deliveryId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderDeliveryItems = {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetOrderEditComment = {
  comment?: Maybe<Scalars['String']>;
};

export type SetOrderEditCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderEditCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderEditKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetOrderEditStagedActions = {
  stagedActions: Array<StagedOrderUpdateAction>;
};

export type SetOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderLineItemCustomType = {
  lineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
};

export type SetOrderLocale = {
  locale?: Maybe<Scalars['Locale']>;
};

export type SetOrderNumber = {
  orderNumber?: Maybe<Scalars['String']>;
};

export type SetOrderParcelItems = {
  parcelId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetOrderParcelMeasurements = {
  parcelId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurementsDraftType>;
};

export type SetOrderParcelTrackingData = {
  parcelId: Scalars['String'];
  trackingData?: Maybe<TrackingDataDraftType>;
};

export type SetOrderReturnPaymentState = {
  returnItemId: Scalars['String'];
  paymentState: ReturnPaymentState;
};

export type SetOrderReturnShipmentState = {
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
};

export type SetOrderShippingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetOrderShippingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetOrderShippingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetOrderStore = {
  store?: Maybe<ResourceIdentifierInput>;
};

export type SetPaymentAmountPaid = {
  amount?: Maybe<MoneyInput>;
};

export type SetPaymentAmountRefunded = {
  amount?: Maybe<MoneyInput>;
};

export type SetPaymentAnonymousId = {
  anonymousId?: Maybe<Scalars['String']>;
};

export type SetPaymentAuthorization = {
  amount?: Maybe<MoneyInput>;
  until?: Maybe<Scalars['DateTime']>;
};

export type SetPaymentCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetPaymentCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetPaymentCustomer = {
  customer?: Maybe<ReferenceInput>;
};

export type SetPaymentExternalId = {
  externalId?: Maybe<Scalars['String']>;
};

export type SetPaymentInterfaceId = {
  interfaceId?: Maybe<Scalars['String']>;
};

export type SetPaymentKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetPaymentMethodInfoInterface = {
  interface: Scalars['String'];
};

export type SetPaymentMethodInfoMethod = {
  method?: Maybe<Scalars['String']>;
};

export type SetPaymentMethodInfoName = {
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetPaymentStatusInterfaceCode = {
  interfaceCode?: Maybe<Scalars['String']>;
};

export type SetPaymentStatusInterfaceText = {
  interfaceText?: Maybe<Scalars['String']>;
};

export type SetProductAssetCustomField = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetProductAssetCustomType = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  type?: Maybe<ResourceIdentifierInput>;
  fields?: Maybe<Array<CustomFieldInput>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetProductAssetDescription = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetProductAssetKey = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  assetKey?: Maybe<Scalars['String']>;
  assetId: Scalars['String'];
};

export type SetProductAssetSources = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  sources?: Maybe<Array<AssetSourceInput>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetProductAssetTags = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Scalars['String']>>;
  assetKey?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
};

export type SetProductAttribute = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductAttributeInAllVariants = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductCategoryOrderHint = {
  categoryId: Scalars['String'];
  orderHint?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductDiscountDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetProductDiscountKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetProductDiscountValidFrom = {
  validFrom?: Maybe<Scalars['DateTime']>;
};

export type SetProductDiscountValidFromAndUntil = {
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetProductDiscountValidUntil = {
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type SetProductDiscountedPrice = {
  priceId: Scalars['String'];
  discounted?: Maybe<DiscountedProductPriceValueInput>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductImageLabel = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetProductMetaAttributes = {
  metaDescription?: Maybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: Maybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: Maybe<Array<LocalizedStringItemInputType>>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductMetaDescription = {
  metaDescription?: Maybe<Array<LocalizedStringItemInputType>>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductMetaKeywords = {
  metaKeywords?: Maybe<Array<LocalizedStringItemInputType>>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductMetaTitle = {
  metaTitle?: Maybe<Array<LocalizedStringItemInputType>>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductPriceCustomField = {
  priceId: Scalars['String'];
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetProductPriceCustomType = {
  priceId: Scalars['String'];
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetProductPrices = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  prices: Array<ProductPriceDataInput>;
  catalog?: Maybe<ReferenceInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductSku = {
  variantId: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProductTaxCategory = {
  taxCategory?: Maybe<ResourceIdentifierInput>;
};

export type SetProductVariantKey = {
  variantId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetProjectSettingsExternalOAuth = {
  externalOAuth?: Maybe<ExternalOAuthDraft>;
};

export type SetProjectSettingsShippingRateInputType = {
  shippingRateInputType?: Maybe<ShippingRateInputTypeInput>;
};

export type SetReviewAuthorName = {
  authorName?: Maybe<Scalars['String']>;
};

export type SetReviewCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetReviewCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetReviewCustomer = {
  customer?: Maybe<ResourceIdentifierInput>;
};

export type SetReviewKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetReviewLocale = {
  locale?: Maybe<Scalars['Locale']>;
};

export type SetReviewRating = {
  rating?: Maybe<Scalars['Int']>;
};

export type SetReviewTarget = {
  target?: Maybe<TargetReferenceInput>;
};

export type SetReviewText = {
  text?: Maybe<Scalars['String']>;
};

export type SetReviewTitle = {
  title?: Maybe<Scalars['String']>;
};

export type SetSearchKeywords = {
  searchKeywords: Array<SearchKeywordInput>;
  staged?: Maybe<Scalars['Boolean']>;
};

export type SetShippingMethodCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetShippingMethodCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetShippingMethodDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SetShippingMethodKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetShippingMethodLocalizedDescription = {
  localizedDescription?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetShippingMethodPredicate = {
  predicate?: Maybe<Scalars['String']>;
};

export type SetShoppingListAnonymousId = {
  anonymousId?: Maybe<Scalars['String']>;
};

export type SetShoppingListCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetShoppingListCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetShoppingListCustomer = {
  customer?: Maybe<ResourceIdentifierInput>;
};

export type SetShoppingListDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type SetShoppingListDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetShoppingListLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetShoppingListLineItemCustomType = {
  lineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetShoppingListSlug = {
  slug?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListStore = {
  store?: Maybe<ResourceIdentifierInput>;
};

export type SetShoppingListTextLineItemCustomField = {
  textLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetShoppingListTextLineItemCustomType = {
  textLineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetShoppingListTextLineItemDescription = {
  textLineItemId: Scalars['String'];
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetStagedOrderBillingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetStagedOrderBillingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderBillingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderBillingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderBillingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderBillingAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address?: Maybe<AddressDraft>;
};

export type SetStagedOrderCountry = {
  country?: Maybe<Scalars['Country']>;
};

export type SetStagedOrderCountryOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  country?: Maybe<Scalars['Country']>;
};

export type SetStagedOrderCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderCustomLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
};

export type SetStagedOrderCustomLineItemTaxAmount = {
  customLineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetStagedOrderCustomLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
};

export type SetStagedOrderCustomLineItemTaxRate = {
  customLineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderCustomLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderCustomShippingMethod = {
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderCustomShippingMethodOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRate;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderCustomerEmail = {
  email?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomerEmailOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomerGroup = {
  customerGroup?: Maybe<ResourceIdentifierInput>;
};

export type SetStagedOrderCustomerGroupOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customerGroupResId?: Maybe<CustomerGroupReferenceIdentifier>;
};

export type SetStagedOrderCustomerId = {
  customerId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderCustomerIdOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customerId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryAddress = {
  deliveryId: Scalars['String'];
  address?: Maybe<AddressInput>;
};

export type SetStagedOrderDeliveryAddressCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderDeliveryAddressCustomType = {
  deliveryId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderDeliveryAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
  address?: Maybe<AddressDraft>;
};

export type SetStagedOrderDeliveryItems = {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetStagedOrderDeliveryItemsOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  deliveryId: Scalars['String'];
  items: Array<DeliveryItem>;
};

export type SetStagedOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderItemShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderItemShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  addressKey: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderLineItemCustomType = {
  lineItemId: Scalars['String'];
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderLineItemDistributionChannel = {
  lineItemId: Scalars['String'];
  distributionChannel?: Maybe<ResourceIdentifierInput>;
};

export type SetStagedOrderLineItemDistributionChannelOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
};

export type SetStagedOrderLineItemPrice = {
  lineItemId: Scalars['String'];
  externalPrice?: Maybe<BaseMoneyInput>;
};

export type SetStagedOrderLineItemPriceOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  externalPrice?: Maybe<BaseMoney>;
};

export type SetStagedOrderLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
};

export type SetStagedOrderLineItemTaxAmount = {
  lineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetStagedOrderLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
};

export type SetStagedOrderLineItemTaxRate = {
  lineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderLineItemTotalPrice = {
  lineItemId: Scalars['String'];
  externalTotalPrice?: Maybe<ExternalLineItemTotalPriceDraft>;
};

export type SetStagedOrderLineItemTotalPriceOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
};

export type SetStagedOrderLocale = {
  locale?: Maybe<Scalars['Locale']>;
};

export type SetStagedOrderLocaleOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
};

export type SetStagedOrderOrderNumber = {
  orderNumber?: Maybe<Scalars['String']>;
};

export type SetStagedOrderOrderNumberOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  orderNumber?: Maybe<Scalars['String']>;
};

export type SetStagedOrderOrderTotalTax = {
  externalTotalGross?: Maybe<MoneyInput>;
  externalTaxPortions?: Maybe<Array<TaxPortionDraft>>;
};

export type SetStagedOrderOrderTotalTaxOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  externalTotalGross?: Maybe<Money>;
  externalTaxPortions: Array<TaxPortion>;
};

export type SetStagedOrderParcelItems = {
  parcelId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetStagedOrderParcelItemsOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  parcelId: Scalars['String'];
  items: Array<DeliveryItem>;
};

export type SetStagedOrderParcelMeasurements = {
  parcelId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurementsDraftType>;
};

export type SetStagedOrderParcelMeasurementsOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  parcelId: Scalars['String'];
  measurements?: Maybe<ParcelMeasurements>;
};

export type SetStagedOrderParcelTrackingData = {
  parcelId: Scalars['String'];
  trackingData?: Maybe<TrackingDataDraftType>;
};

export type SetStagedOrderParcelTrackingDataOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  parcelId: Scalars['String'];
  trackingData?: Maybe<TrackingData>;
};

export type SetStagedOrderReturnPaymentState = {
  returnItemId: Scalars['String'];
  paymentState: ReturnPaymentState;
};

export type SetStagedOrderReturnPaymentStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  returnItemId: Scalars['String'];
  paymentState: ReturnPaymentState;
};

export type SetStagedOrderReturnShipmentState = {
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
};

export type SetStagedOrderReturnShipmentStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
};

export type SetStagedOrderShippingAddress = {
  address?: Maybe<AddressInput>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethod = {
  address: AddressInput;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethodOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address: AddressDraft;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRate;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderShippingAddressAndShippingMethod = {
  address: AddressInput;
  shippingMethod?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderShippingAddressAndShippingMethodOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address: AddressDraft;
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderShippingAddressCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStagedOrderShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderShippingAddressCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStagedOrderShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  custom: CustomFieldsCommand;
};

export type SetStagedOrderShippingAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address?: Maybe<AddressDraft>;
};

export type SetStagedOrderShippingMethod = {
  shippingMethod?: Maybe<ResourceIdentifierInput>;
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderShippingMethodOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderShippingMethodTaxAmount = {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraft>;
};

export type SetStagedOrderShippingMethodTaxAmountOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
};

export type SetStagedOrderShippingMethodTaxRate = {
  externalTaxRate?: Maybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderShippingMethodTaxRateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type SetStagedOrderShippingRateInput = {
  shippingRateInput?: Maybe<ShippingRateInputDraft>;
};

export type SetStagedOrderShippingRateInputOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  shippingRateInput?: Maybe<ShippingRateInputDraftOutput>;
};

export type SetStagedOrderStore = {
  store?: Maybe<ResourceIdentifierInput>;
};

export type SetStagedOrderStoreOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  storeResId?: Maybe<ResourceIdentifier>;
};

export type SetStateDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateName = {
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateRoles = {
  roles: Array<StateRole>;
};

export type SetStateTransitions = {
  transitions?: Maybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreCustomField = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type SetStoreCustomType = {
  fields?: Maybe<Array<CustomFieldInput>>;
  type?: Maybe<ResourceIdentifierInput>;
  typeKey?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type SetStoreDistributionChannels = {
  distributionChannels?: Maybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreLanguages = {
  languages?: Maybe<Array<Scalars['Locale']>>;
};

export type SetStoreName = {
  name?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetStoreSupplyChannels = {
  supplyChannels?: Maybe<Array<ResourceIdentifierInput>>;
};

export type SetSubscriptionChanges = {
  changes: Array<ChangeSubscriptionInput>;
};

export type SetSubscriptionKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetSubscriptionMessages = {
  messages: Array<MessageSubscriptionInput>;
};

export type SetTaxCategoryKey = {
  key?: Maybe<Scalars['String']>;
};

export type SetType = FieldType & {
  elementType: FieldType;
  name: Scalars['String'];
};

export type SetTypeDescription = {
  description?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetZoneDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SetZoneKey = {
  key?: Maybe<Scalars['String']>;
};

export type ShippingMethodDraft = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  localizedDescription?: Maybe<Array<LocalizedStringItemInputType>>;
  taxCategory: ResourceIdentifierInput;
  zoneRates?: Maybe<Array<ZoneRateDraft>>;
  isDefault: Scalars['Boolean'];
  predicate?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsDraft>;
};

export type ShippingMethodUpdateAction = {
  addShippingRate?: Maybe<AddShippingMethodShippingRate>;
  addZone?: Maybe<AddShippingMethodZone>;
  changeIsDefault?: Maybe<ChangeShippingMethodIsDefault>;
  changeName?: Maybe<ChangeShippingMethodName>;
  changeTaxCategory?: Maybe<ChangeShippingMethodTaxCategory>;
  removeShippingRate?: Maybe<RemoveShippingMethodShippingRate>;
  removeZone?: Maybe<RemoveShippingMethodZone>;
  setCustomField?: Maybe<SetShippingMethodCustomField>;
  setCustomType?: Maybe<SetShippingMethodCustomType>;
  setDescription?: Maybe<SetShippingMethodDescription>;
  setKey?: Maybe<SetShippingMethodKey>;
  setLocalizedDescription?: Maybe<SetShippingMethodLocalizedDescription>;
  setPredicate?: Maybe<SetShippingMethodPredicate>;
};

export type ShippingRateCartClassificationPriceTier = ShippingRatePriceTier & {
  value: Scalars['String'];
  price: Money;
  isMatching?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type ShippingRateCartScorePriceTier = ShippingRatePriceTier & {
  score: Scalars['Int'];
  price?: Maybe<Money>;
  priceFunction?: Maybe<PriceFunction>;
  isMatching?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type ShippingRateCartValuePriceTier = ShippingRatePriceTier & {
  minimumCentAmount: Scalars['Int'];
  price: Money;
  isMatching?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type ShippingRateDraft = {
  price: MoneyDraft;
  freeAbove?: Maybe<MoneyDraft>;
  tiers?: Maybe<Array<ShippingRatePriceTierDraft>>;
};

export type ShippingRateInputDraft = {
  Classification?: Maybe<ClassificationShippingRateInputDraft>;
  Score?: Maybe<ScoreShippingRateInputDraft>;
};

export type ShippingRateInputDraftOutput = {
  type: Scalars['String'];
};

export type ShippingRateInputLocalizedEnumValue = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};


export type ShippingRateInputLocalizedEnumValueLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ShippingRateInputTypeInput = {
  CartValue?: Maybe<CartValueInput>;
  CartClassification?: Maybe<CartClassificationInput>;
  CartScore?: Maybe<CartScoreInput>;
};

export type ShippingRatePriceTierCartClassificationDraft = {
  value: Scalars['String'];
  price: MoneyDraft;
};

export type ShippingRatePriceTierCartScoreDraft = {
  score: Scalars['Int'];
  price?: Maybe<MoneyDraft>;
  priceFunction?: Maybe<PriceFunctionDraft>;
};

export type ShippingRatePriceTierCartValueDraft = {
  minimumCentAmount: Scalars['Int'];
  price: MoneyDraft;
};

export type ShippingRatePriceTierDraft = {
  CartValue?: Maybe<ShippingRatePriceTierCartValueDraft>;
  CartClassification?: Maybe<ShippingRatePriceTierCartClassificationDraft>;
  CartScore?: Maybe<ShippingRatePriceTierCartScoreDraft>;
};

export type ShippingTarget = CartDiscountTarget & {
  type: Scalars['String'];
};

export type ShippingTargetDraft = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ShippingTargetDraftType = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ShippingTargetInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type ShoppingListDraft = {
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  lineItems?: Maybe<Array<ShoppingListLineItemDraft>>;
  textLineItems?: Maybe<Array<TextLineItemDraft>>;
  custom?: Maybe<CustomFieldsDraft>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  customer?: Maybe<ResourceIdentifierInput>;
  slug?: Maybe<Array<LocalizedStringItemInputType>>;
  anonymousId?: Maybe<Scalars['String']>;
};

export type ShoppingListLineItemDraft = {
  productId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  custom?: Maybe<CustomFieldsDraft>;
  addedAt?: Maybe<Scalars['DateTime']>;
};

export type ShoppingListUpdateAction = {
  addLineItem?: Maybe<AddShoppingListLineItem>;
  addTextLineItem?: Maybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: Maybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: Maybe<ChangeShoppingListLineItemsOrder>;
  changeName?: Maybe<ChangeShoppingListName>;
  changeTextLineItemName?: Maybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: Maybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: Maybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: Maybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: Maybe<RemoveShoppingListTextLineItem>;
  setAnonymousId?: Maybe<SetShoppingListAnonymousId>;
  setCustomField?: Maybe<SetShoppingListCustomField>;
  setCustomType?: Maybe<SetShoppingListCustomType>;
  setCustomer?: Maybe<SetShoppingListCustomer>;
  setDeleteDaysAfterLastModification?: Maybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: Maybe<SetShoppingListDescription>;
  setKey?: Maybe<SetShoppingListKey>;
  setLineItemCustomField?: Maybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetShoppingListLineItemCustomType>;
  setSlug?: Maybe<SetShoppingListSlug>;
  setStore?: Maybe<SetShoppingListStore>;
  setTextLineItemCustomField?: Maybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: Maybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: Maybe<SetShoppingListTextLineItemDescription>;
};

export type ShoppingListsConfigurationInput = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type SimpleAttributeTypeDraft = {
  dummy?: Maybe<Scalars['String']>;
};

export type SimpleFieldTypeDraft = {
  dummy?: Maybe<Scalars['String']>;
};

export type StagedOrderUpdateAction = {
  addCustomLineItem?: Maybe<AddStagedOrderCustomLineItem>;
  addDelivery?: Maybe<AddStagedOrderDelivery>;
  addDiscountCode?: Maybe<AddStagedOrderDiscountCode>;
  addItemShippingAddress?: Maybe<AddStagedOrderItemShippingAddress>;
  addLineItem?: Maybe<AddStagedOrderLineItem>;
  addParcelToDelivery?: Maybe<AddStagedOrderParcelToDelivery>;
  addPayment?: Maybe<AddStagedOrderPayment>;
  addReturnInfo?: Maybe<AddStagedOrderReturnInfo>;
  addShoppingList?: Maybe<AddStagedOrderShoppingList>;
  changeCustomLineItemMoney?: Maybe<ChangeStagedOrderCustomLineItemMoney>;
  changeCustomLineItemQuantity?: Maybe<ChangeStagedOrderCustomLineItemQuantity>;
  changeLineItemQuantity?: Maybe<ChangeStagedOrderLineItemQuantity>;
  changeOrderState?: Maybe<ChangeStagedOrderOrderState>;
  changePaymentState?: Maybe<ChangeStagedOrderPaymentState>;
  changeShipmentState?: Maybe<ChangeStagedOrderShipmentState>;
  changeTaxCalculationMode?: Maybe<ChangeStagedOrderTaxCalculationMode>;
  changeTaxMode?: Maybe<ChangeStagedOrderTaxMode>;
  changeTaxRoundingMode?: Maybe<ChangeStagedOrderTaxRoundingMode>;
  importCustomLineItemState?: Maybe<ImportStagedOrderCustomLineItemState>;
  importLineItemState?: Maybe<ImportStagedOrderLineItemState>;
  recalculate?: Maybe<RecalculateStagedOrder>;
  removeCustomLineItem?: Maybe<RemoveStagedOrderCustomLineItem>;
  removeDelivery?: Maybe<RemoveStagedOrderDelivery>;
  removeDiscountCode?: Maybe<RemoveStagedOrderDiscountCode>;
  removeItemShippingAddress?: Maybe<RemoveStagedOrderItemShippingAddress>;
  removeLineItem?: Maybe<RemoveStagedOrderLineItem>;
  removeParcelFromDelivery?: Maybe<RemoveStagedOrderParcelFromDelivery>;
  removePayment?: Maybe<RemoveStagedOrderPayment>;
  setBillingAddress?: Maybe<SetStagedOrderBillingAddress>;
  setBillingAddressCustomField?: Maybe<SetStagedOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: Maybe<SetStagedOrderBillingAddressCustomType>;
  setCountry?: Maybe<SetStagedOrderCountry>;
  setCustomField?: Maybe<SetStagedOrderCustomField>;
  setCustomLineItemCustomField?: Maybe<SetStagedOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: Maybe<SetStagedOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: Maybe<SetStagedOrderCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: Maybe<SetStagedOrderCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: Maybe<SetStagedOrderCustomLineItemTaxRate>;
  setCustomShippingMethod?: Maybe<SetStagedOrderCustomShippingMethod>;
  setCustomType?: Maybe<SetStagedOrderCustomType>;
  setCustomerEmail?: Maybe<SetStagedOrderCustomerEmail>;
  setCustomerGroup?: Maybe<SetStagedOrderCustomerGroup>;
  setCustomerId?: Maybe<SetStagedOrderCustomerId>;
  setDeliveryAddress?: Maybe<SetStagedOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: Maybe<SetStagedOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: Maybe<SetStagedOrderDeliveryAddressCustomType>;
  setDeliveryItems?: Maybe<SetStagedOrderDeliveryItems>;
  setItemShippingAddressCustomField?: Maybe<SetStagedOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: Maybe<SetStagedOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: Maybe<SetStagedOrderLineItemCustomField>;
  setLineItemCustomType?: Maybe<SetStagedOrderLineItemCustomType>;
  setLineItemDistributionChannel?: Maybe<SetStagedOrderLineItemDistributionChannel>;
  setLineItemPrice?: Maybe<SetStagedOrderLineItemPrice>;
  setLineItemShippingDetails?: Maybe<SetStagedOrderLineItemShippingDetails>;
  setLineItemTaxAmount?: Maybe<SetStagedOrderLineItemTaxAmount>;
  setLineItemTaxRate?: Maybe<SetStagedOrderLineItemTaxRate>;
  setLineItemTotalPrice?: Maybe<SetStagedOrderLineItemTotalPrice>;
  setLocale?: Maybe<SetStagedOrderLocale>;
  setOrderNumber?: Maybe<SetStagedOrderOrderNumber>;
  setOrderTotalTax?: Maybe<SetStagedOrderOrderTotalTax>;
  setParcelItems?: Maybe<SetStagedOrderParcelItems>;
  setParcelMeasurements?: Maybe<SetStagedOrderParcelMeasurements>;
  setParcelTrackingData?: Maybe<SetStagedOrderParcelTrackingData>;
  setReturnPaymentState?: Maybe<SetStagedOrderReturnPaymentState>;
  setReturnShipmentState?: Maybe<SetStagedOrderReturnShipmentState>;
  setShippingAddress?: Maybe<SetStagedOrderShippingAddress>;
  setShippingAddressAndCustomShippingMethod?: Maybe<SetStagedOrderShippingAddressAndCustomShippingMethod>;
  setShippingAddressAndShippingMethod?: Maybe<SetStagedOrderShippingAddressAndShippingMethod>;
  setShippingAddressCustomField?: Maybe<SetStagedOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: Maybe<SetStagedOrderShippingAddressCustomType>;
  setShippingMethod?: Maybe<SetStagedOrderShippingMethod>;
  setShippingMethodTaxAmount?: Maybe<SetStagedOrderShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: Maybe<SetStagedOrderShippingMethodTaxRate>;
  setShippingRateInput?: Maybe<SetStagedOrderShippingRateInput>;
  setStore?: Maybe<SetStagedOrderStore>;
  transitionCustomLineItemState?: Maybe<TransitionStagedOrderCustomLineItemState>;
  transitionLineItemState?: Maybe<TransitionStagedOrderLineItemState>;
  transitionState?: Maybe<TransitionStagedOrderState>;
  updateItemShippingAddress?: Maybe<UpdateStagedOrderItemShippingAddress>;
  updateSyncInfo?: Maybe<UpdateStagedOrderSyncInfo>;
};

export type StateDraft = {
  key: Scalars['String'];
  type: StateType;
  name?: Maybe<Array<LocalizedStringItemInputType>>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  initial?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<StateRole>>;
  transitions?: Maybe<Array<ReferenceInput>>;
};

export type StateUpdateAction = {
  addRoles?: Maybe<AddStateRoles>;
  changeInitial?: Maybe<ChangeStateInitial>;
  changeKey?: Maybe<ChangeStateKey>;
  changeType?: Maybe<ChangeStateType>;
  removeRoles?: Maybe<RemoveStateRoles>;
  setDescription?: Maybe<SetStateDescription>;
  setName?: Maybe<SetStateName>;
  setRoles?: Maybe<SetStateRoles>;
  setTransitions?: Maybe<SetStateTransitions>;
};

export type StoreUpdateAction = {
  addDistributionChannel?: Maybe<AddStoreDistributionChannel>;
  addSupplyChannel?: Maybe<AddStoreSupplyChannel>;
  removeDistributionChannel?: Maybe<RemoveStoreDistributionChannel>;
  removeSupplyChannel?: Maybe<RemoveStoreSupplyChannel>;
  setCustomField?: Maybe<SetStoreCustomField>;
  setCustomType?: Maybe<SetStoreCustomType>;
  setDistributionChannels?: Maybe<SetStoreDistributionChannels>;
  setLanguages?: Maybe<SetStoreLanguages>;
  setName?: Maybe<SetStoreName>;
  setSupplyChannels?: Maybe<SetStoreSupplyChannels>;
};

export type StringAttribute = Attribute & {
  value: Scalars['String'];
  name: Scalars['String'];
};

export type StringField = CustomField & {
  value: Scalars['String'];
  name: Scalars['String'];
};

export type StringType = FieldType & {
  name: Scalars['String'];
};

export type SubRateDraft = {
  name: Scalars['String'];
  amount: Scalars['Float'];
};

export type SubscriptionDraft = {
  key?: Maybe<Scalars['String']>;
  destination: DestinationInput;
  messages?: Maybe<Array<MessageSubscriptionInput>>;
  changes?: Maybe<Array<ChangeSubscriptionInput>>;
  format?: Maybe<SubscriptionFormatInput>;
};

export type SubscriptionFormatInput = {
  Platform?: Maybe<PlatformFormatInput>;
  CloudEvents?: Maybe<CloudEventsSubscriptionsFormatInput>;
};

export type SubscriptionUpdateAction = {
  changeDestination?: Maybe<ChangeSubscriptionDestination>;
  setChanges?: Maybe<SetSubscriptionChanges>;
  setKey?: Maybe<SetSubscriptionKey>;
  setMessages?: Maybe<SetSubscriptionMessages>;
};

export type TargetReferenceInput = {
  typeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type TaxCategoryAddTaxRate = {
  taxRate: TaxRateDraft;
};

export type TaxCategoryChangeName = {
  name: Scalars['String'];
};

export type TaxCategoryDraft = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<TaxRateDraft>>;
  key?: Maybe<Scalars['String']>;
};

export type TaxCategoryRemoveTaxRate = {
  taxRateId: Scalars['String'];
};

export type TaxCategoryReplaceTaxRate = {
  taxRateId: Scalars['String'];
  taxRate: TaxRateDraft;
};

export type TaxCategorySetDescription = {
  description?: Maybe<Scalars['String']>;
};

export type TaxCategoryUpdateAction = {
  changeName?: Maybe<TaxCategoryChangeName>;
  setDescription?: Maybe<TaxCategorySetDescription>;
  addTaxRate?: Maybe<TaxCategoryAddTaxRate>;
  replaceTaxRate?: Maybe<TaxCategoryReplaceTaxRate>;
  removeTaxRate?: Maybe<TaxCategoryRemoveTaxRate>;
  setKey?: Maybe<SetTaxCategoryKey>;
};

export type TaxPortionDraft = {
  name?: Maybe<Scalars['String']>;
  rate: Scalars['Float'];
  amount: MoneyInput;
};

export type TaxRateDraft = {
  name: Scalars['String'];
  amount?: Maybe<Scalars['Float']>;
  includedInPrice: Scalars['Boolean'];
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
  subRates?: Maybe<Array<SubRateDraft>>;
};

export type TextLineItemDraft = {
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  quantity?: Maybe<Scalars['Int']>;
  custom?: Maybe<CustomFieldsDraft>;
  addedAt?: Maybe<Scalars['DateTime']>;
};


export type TimeAttribute = Attribute & {
  value: Scalars['Time'];
  name: Scalars['String'];
};

export type TimeField = CustomField & {
  value: Scalars['Time'];
  name: Scalars['String'];
};

export type TimeType = FieldType & {
  name: Scalars['String'];
};

export type TrackingDataDraftType = {
  trackingId?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerTransaction?: Maybe<Scalars['String']>;
  isReturn?: Maybe<Scalars['Boolean']>;
};

export type TransactionDraft = {
  timestamp?: Maybe<Scalars['DateTime']>;
  type: TransactionType;
  amount: MoneyInput;
  interactionId?: Maybe<Scalars['String']>;
  state?: Maybe<TransactionState>;
};

export type TransitionOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromState: ResourceIdentifierInput;
  toState: ResourceIdentifierInput;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionOrderLineItemState = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromState: ResourceIdentifierInput;
  toState: ResourceIdentifierInput;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionOrderState = {
  state: ResourceIdentifierInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type TransitionPaymentState = {
  state: ResourceIdentifierInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type TransitionProductState = {
  state: ReferenceInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type TransitionReviewState = {
  state: ResourceIdentifierInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type TransitionStagedOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromState: ResourceIdentifierInput;
  toState: ResourceIdentifierInput;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromStateResId: ResourceIdentifier;
  toStateResId: ResourceIdentifier;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionStagedOrderLineItemState = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromState: ResourceIdentifierInput;
  toState: ResourceIdentifierInput;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  fromStateResId: ResourceIdentifier;
  toStateResId: ResourceIdentifier;
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
};

export type TransitionStagedOrderState = {
  state: ResourceIdentifierInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type TransitionStagedOrderStateOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  stateResId: ResourceIdentifier;
  force: Scalars['Boolean'];
};

export type TriggerInput = {
  resourceTypeId: Scalars['String'];
  actions?: Maybe<Array<ActionType>>;
};

export type TypeDefinitionDraft = {
  key: Scalars['String'];
  name: Array<LocalizedStringItemInputType>;
  description?: Maybe<Array<LocalizedStringItemInputType>>;
  resourceTypeIds: Array<Scalars['String']>;
  fieldDefinitions?: Maybe<Array<FieldDefinitionInput>>;
};

export type TypeUpdateAction = {
  addEnumValue?: Maybe<AddTypeEnumValue>;
  addFieldDefinition?: Maybe<AddTypeFieldDefinition>;
  addLocalizedEnumValue?: Maybe<AddTypeLocalizedEnumValue>;
  changeEnumValueLabel?: Maybe<ChangeTypeEnumValueLabel>;
  changeEnumValueOrder?: Maybe<ChangeTypeEnumValueOrder>;
  changeLabel?: Maybe<ChangeTypeLabel>;
  changeFieldDefinitionOrder?: Maybe<ChangeTypeFieldDefinitionOrder>;
  changeInputHint?: Maybe<ChangeTypeInputHint>;
  changeLocalizedEnumValueLabel?: Maybe<ChangeTypeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: Maybe<ChangeTypeLocalizedEnumValueOrder>;
  changeKey?: Maybe<ChangeTypeKey>;
  changeName?: Maybe<ChangeTypeName>;
  removeFieldDefinition?: Maybe<RemoveTypeFieldDefinition>;
  setDescription?: Maybe<SetTypeDescription>;
};

export type UnpublishProduct = {
  dummy?: Maybe<Scalars['String']>;
};

export type UpdateCartItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  syncedAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
};

export type UpdateStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  address: AddressDraft;
};

export type UpdateStagedOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  syncedAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
};

export type UpdateStagedOrderSyncInfoOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  channelResId: ChannelReferenceIdentifier;
  syncedAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
};

export type WhitespaceSuggestTokenizer = SuggestTokenizer & {
  type: Scalars['String'];
};

export type WhitespaceSuggestTokenizerInput = {
  dummy?: Maybe<Scalars['String']>;
};

export type ZoneLocation = {
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
};

export type ZoneRateDraft = {
  zone: ResourceIdentifierInput;
  shippingRates?: Maybe<Array<ShippingRateDraft>>;
};

export type ZoneUpdateAction = {
  addLocation?: Maybe<AddZoneLocation>;
  changeName?: Maybe<ChangeZoneName>;
  removeLocation?: Maybe<RemoveZoneLocation>;
  setDescription?: Maybe<SetZoneDescription>;
  setKey?: Maybe<SetZoneKey>;
};

export type AddAttributeDefinition = {
  attributeDefinition: AttributeDefinitionDraft;
};

export type AddLocalizedEnumValue = {
  attributeName: Scalars['String'];
  value: LocalizedEnumValueDraft;
};

export type AddPlainEnumValue = {
  attributeName: Scalars['String'];
  value: PlainEnumValueDraft;
};

export type ChangeAttributeName = {
  attributeName: Scalars['String'];
  newAttributeName: Scalars['String'];
};

export type ChangeAttributeOrder = {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
};

export type ChangeAttributeOrderByName = {
  attributeNames: Array<Scalars['String']>;
};

export type ChangeDescription = {
  description: Scalars['String'];
};

export type ChangeEnumKey = {
  attributeName: Scalars['String'];
  key: Scalars['String'];
  newKey: Scalars['String'];
};

export type ChangeInputHint = {
  attributeName: Scalars['String'];
  newValue: TextInputHint;
};

export type ChangeIsSearchable = {
  attributeName: Scalars['String'];
  isSearchable: Scalars['Boolean'];
};

export type ChangeLabel = {
  attributeName: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeLocalizedEnumValueLabel = {
  attributeName: Scalars['String'];
  newValue: LocalizedEnumValueDraft;
};

export type ChangeLocalizedEnumValueOrder = {
  attributeName: Scalars['String'];
  values: Array<LocalizedEnumValueDraft>;
};

export type ChangeName = {
  name: Scalars['String'];
};

export type ChangePlainEnumValueLabel = {
  attributeName: Scalars['String'];
  newValue: PlainEnumValueDraft;
};

export type ChangePlainEnumValueOrder = {
  attributeName: Scalars['String'];
  values: Array<PlainEnumValueDraft>;
};

export type RemoveAttributeDefinition = {
  name: Scalars['String'];
};

export type RemoveEnumValues = {
  attributeName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type SetInputTip = {
  attributeName: Scalars['String'];
  inputTip?: Maybe<Array<LocalizedStringItemInputType>>;
};

export type SetKey = {
  key?: Maybe<Scalars['String']>;
};

/** API Clients can be used to obtain OAuth 2 access tokens */
export type ApiClientWithoutSecret = {
  id: Scalars['String'];
  name: Scalars['String'];
  scope: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  lastUsedAt?: Maybe<Scalars['Date']>;
};

export type ApiClientWithoutSecretQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<ApiClientWithoutSecret>;
};

export enum ActionType {
  Update = 'Update',
  Create = 'Create'
}

/** A field to access the active cart. */
export type ActiveCartInterface = {
  activeCart?: Maybe<Cart>;
};

/** An address represents a postal address. */
export type Address = {
  id?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country: Scalars['Country'];
  company?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  pOBox?: Maybe<Scalars['String']>;
  /** @deprecated Field 'contactInfo' is deprecated. Instead of using e.g. 'contactInfo.email' use 'email' directly. */
  contactInfo: AddressContactInfo;
  additionalAddressInfo?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsType>;
};

export type AddressContactInfo = {
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
};

export type Asset = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  sources: Array<AssetSource>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  tags: Array<Scalars['String']>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
};


export type AssetNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type AssetDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type AssetDimensions = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type AssetSource = {
  uri: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  dimensions?: Maybe<AssetDimensions>;
  contentType?: Maybe<Scalars['String']>;
};

export enum AttributeConstraint {
  /** No constraints are applied to the attribute */
  None = 'None',
  /** Attribute value should be different in each variant */
  Unique = 'Unique',
  /** A set of attributes, that have this constraint, should have different combinations in each variant */
  CombinationUnique = 'CombinationUnique',
  /** Attribute value should be the same in all variants */
  SameForAll = 'SameForAll'
}

export type AttributeDefinition = {
  type: AttributeDefinitionType;
  name: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  attributeConstraint: AttributeConstraint;
  inputTip?: Maybe<Scalars['String']>;
  inputHint: TextInputHint;
  isSearchable: Scalars['Boolean'];
  labelAllLocales: Array<LocalizedString>;
  inputTipAllLocales?: Maybe<Array<LocalizedString>>;
};


export type AttributeDefinitionLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type AttributeDefinitionInputTipArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type AttributeDefinitionResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  results: Array<AttributeDefinition>;
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type AttributeDefinitionType = {
  name: Scalars['String'];
};

export type BaseMoney = {
  type: Scalars['String'];
  currencyCode: Scalars['Currency'];
  centAmount: Scalars['Long'];
  fractionDigits: Scalars['Int'];
};

export type BooleanAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type Cart = Versioned & {
  customerId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']>;
  anonymousId?: Maybe<Scalars['String']>;
  lineItems: Array<LineItem>;
  customLineItems: Array<CustomLineItem>;
  totalPrice: Money;
  taxedPrice?: Maybe<TaxedPrice>;
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  inventoryMode: InventoryMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxCalculationMode: TaxCalculationMode;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']>;
  shippingInfo?: Maybe<ShippingInfo>;
  discountCodes: Array<DiscountCodeInfo>;
  refusedGifts: Array<CartDiscount>;
  refusedGiftsRefs: Array<Reference>;
  paymentInfo?: Maybe<PaymentInfo>;
  locale?: Maybe<Scalars['Locale']>;
  shippingRateInput?: Maybe<ShippingRateInput>;
  origin: CartOrigin;
  /** beta feature */
  storeRef?: Maybe<KeyReference>;
  /** beta feature */
  store?: Maybe<Store>;
  itemShippingAddresses: Array<Address>;
  cartState: CartState;
  key?: Maybe<Scalars['String']>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type CartCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

/**
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 */
export type CartDiscount = Versioned & {
  cartPredicate: Scalars['String'];
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  stackingMode: StackingMode;
  isActive: Scalars['Boolean'];
  requiresDiscountCode: Scalars['Boolean'];
  sortOrder: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  referenceRefs: Array<Reference>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  value: CartDiscountValue;
  target?: Maybe<CartDiscountTarget>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/**
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 */
export type CartDiscountNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/**
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 */
export type CartDiscountDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type CartDiscountLimitsProjection = {
  totalActiveWithoutDiscountCodes: LimitWithCurrent;
};

export type CartDiscountQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<CartDiscount>;
};

export type CartDiscountTarget = {
  type: Scalars['String'];
};

export type CartDiscountValue = {
  type: Scalars['String'];
};

export type CartLimitsProjection = {
  total: LimitWithCurrent;
};

export enum CartOrigin {
  /** The cart was created by the merchant on behalf of the customer */
  Merchant = 'Merchant',
  /** The cart was created by the customer. This is the default value */
  Customer = 'Customer'
}

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterface = {
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
};


/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartArgs = {
  id: Scalars['String'];
};


/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CartQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Cart>;
};

export enum CartState {
  /** The cart was ordered. No further operations on the cart are allowed. */
  Ordered = 'Ordered',
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */
  Merged = 'Merged',
  /** The cart can be updated and ordered. It is the default state. */
  Active = 'Active'
}

export type CartsConfiguration = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  allowAddingUnpublishedProducts: Scalars['Boolean'];
  countryTaxRateFallbackEnabled: Scalars['Boolean'];
};

export type Category = Versioned & {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  version: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  ancestorsRef: Array<Reference>;
  ancestors: Array<Category>;
  parentRef?: Maybe<Reference>;
  parent?: Maybe<Category>;
  orderHint: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  /**
   * Number of a products in the category subtree.
   * @deprecated The returned number is representing only staged products. Use 'stagedProductCount' instead
   */
  productCount: Scalars['Int'];
  /** Number of staged products in the category subtree. */
  stagedProductCount: Scalars['Int'];
  /** Number of direct child categories. */
  childCount: Scalars['Int'];
  /** Direct child categories. */
  children?: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  assets: Array<Asset>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type CategoryNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategoryDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategorySlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategoryMetaTitleArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategoryMetaKeywordsArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategoryMetaDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategoryCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type CategoryOrderHint = {
  categoryId: Scalars['String'];
  orderHint: Scalars['String'];
};

export type CategoryQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Category>;
};

export type CategorySearch = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  version: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  ancestorsRef: Array<Reference>;
  ancestors: Array<CategorySearch>;
  parentRef?: Maybe<Reference>;
  parent?: Maybe<CategorySearch>;
  externalId?: Maybe<Scalars['String']>;
  /** @deprecated The returned number is representing only staged products. Use 'stagedProductCount' instead */
  productCount: Scalars['Int'];
  stagedProductCount: Scalars['Int'];
  childCount: Scalars['Int'];
  productTypeNames: Array<Scalars['String']>;
  /** Direct child categories. */
  children: Array<CategorySearch>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  orderHint: Scalars['String'];
  assets: Array<Asset>;
  custom?: Maybe<CustomFieldsType>;
};


export type CategorySearchNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategorySearchDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type CategorySearchSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type CategorySearchResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Int'];
  results: Array<CategorySearch>;
};

export type ChangeSubscription = {
  resourceTypeId: Scalars['String'];
};

export type Channel = Versioned & ReviewTarget & {
  id: Scalars['String'];
  /** @deprecated Use 'channelRef' to fetch the reference. */
  typeId: Scalars['String'];
  version: Scalars['Long'];
  key: Scalars['String'];
  roles: Array<ChannelRole>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  address?: Maybe<Address>;
  geoLocation?: Maybe<Geometry>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  custom?: Maybe<CustomFieldsType>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type ChannelNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ChannelDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ChannelQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Channel>;
};

export enum ChannelRole {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  InventorySupply = 'InventorySupply',
  /** Role tells that this channel can be used to expose products to a specific distribution channel. It can be used by the cart to select a product price. */
  ProductDistribution = 'ProductDistribution',
  /** Role tells that this channel can be used to track order export activities. */
  OrderExport = 'OrderExport',
  /** Role tells that this channel can be used to track order import activities. */
  OrderImport = 'OrderImport',
  /** This role can be combined with some other roles (e.g. with `InventorySupply`) to represent the fact that this particular channel is the primary/master channel among the channels of the same type. */
  Primary = 'Primary'
}



export type CustomFieldsType = {
  typeRef: Reference;
  type?: Maybe<TypeDefinition>;
  /** This field contains non-typed data. */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Typed custom fields are no longer supported, please use customFieldsRaw instead.
   */
  customFields: Type;
};


export type CustomFieldsTypeCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItem = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  money: BaseMoney;
  totalPrice: Money;
  slug: Scalars['String'];
  quantity: Scalars['Long'];
  state: Array<ItemState>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  shippingDetails?: Maybe<ItemShippingDetails>;
};


/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItemNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItemCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type CustomObject = Versioned & {
  container: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['Json'];
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type CustomObjectLimitsProjection = {
  total: LimitWithCurrent;
};

export type CustomObjectQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<CustomObject>;
};

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type Customer = Versioned & {
  customerNumber?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  addresses: Array<Address>;
  defaultShippingAddressId?: Maybe<Scalars['String']>;
  defaultBillingAddressId?: Maybe<Scalars['String']>;
  shippingAddressIds: Array<Scalars['String']>;
  billingAddressIds: Array<Scalars['String']>;
  isEmailVerified: Scalars['Boolean'];
  customerGroupRef?: Maybe<Reference>;
  externalId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['Locale']>;
  salutation?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  companyName?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  customerGroup?: Maybe<CustomerGroup>;
  defaultShippingAddress?: Maybe<Address>;
  defaultBillingAddress?: Maybe<Address>;
  shippingAddresses: Array<Address>;
  billingAddresses: Array<Address>;
  /** beta feature */
  storesRef: Array<KeyReference>;
  /** beta feature */
  stores: Array<Store>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type CustomerCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

/** A field to access a customer's active cart. */
export type CustomerActiveCartInterface = {
  customerActiveCart?: Maybe<Cart>;
};


/** A field to access a customer's active cart. */
export type CustomerActiveCartInterfaceCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type CustomerGroup = Versioned & {
  id: Scalars['String'];
  /** @deprecated Use 'customerGroupRef' to fetch the reference. */
  typeId: Scalars['String'];
  version: Scalars['Long'];
  name: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type CustomerGroupLimitsProjection = {
  total: LimitWithCurrent;
};

export type CustomerGroupQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<CustomerGroup>;
};

export type CustomerLimitsProjection = {
  total: LimitWithCurrent;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterface = {
  customer?: Maybe<Customer>;
  customers: CustomerQueryResult;
};


/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomerArgs = {
  emailToken?: Maybe<Scalars['String']>;
  passwordToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CustomerQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Customer>;
};


export type DateAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};


export type DateTimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type Delivery = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  items: Array<DeliveryItem>;
  parcels: Array<Parcel>;
  address?: Maybe<Address>;
};

export type DeliveryItem = {
  id: Scalars['String'];
  quantity: Scalars['Long'];
};

export type Destination = {
  type: Scalars['String'];
};

export type Dimensions = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCode = Versioned & {
  code: Scalars['String'];
  isActive: Scalars['Boolean'];
  maxApplications?: Maybe<Scalars['Long']>;
  maxApplicationsPerCustomer?: Maybe<Scalars['Long']>;
  cartPredicate?: Maybe<Scalars['String']>;
  applicationVersion?: Maybe<Scalars['Long']>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  groups: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  cartDiscounts: Array<CartDiscount>;
  referenceRefs: Array<Reference>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  /** How many times this discount code was applied (only applications that were part of a successful checkout are considered) */
  applicationCount: Scalars['Long'];
  cartDiscountRefs: Array<Reference>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type DiscountCodeInfo = {
  discountCodeRef: Reference;
  state?: Maybe<DiscountCodeState>;
  discountCode?: Maybe<DiscountCode>;
};

export type DiscountCodeQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<DiscountCode>;
};

export enum DiscountCodeState {
  /** The discount code is active and none of the discounts were applied because the discount application was stopped by one discount that has the StackingMode of StopAfterThisDiscount defined */
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  /** The discount code is not valid or it does not contain any valid cart discounts. Validity is determined based on the validFrom and validUntil dates */
  NotValid = 'NotValid',
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */
  MaxApplicationReached = 'MaxApplicationReached',
  /** The discount code is active and it contains at least one active and valid CartDiscount. The discount code cartPredicate matches the cart and at least one of the contained active discount’s cart predicates matches the cart. */
  MatchesCart = 'MatchesCart',
  /** The discount code is active and it contains at least one active and valid CartDiscount. But its cart predicate does not match the cart or none of the contained active discount’s cart predicates match the cart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** The discount code is not active or it does not contain any active cart discounts. */
  NotActive = 'NotActive'
}

export type DiscountedLineItemPortion = {
  discount?: Maybe<CartDiscount>;
  discountRef: Reference;
  discountedAmount: BaseMoney;
};

export type DiscountedLineItemPrice = {
  value: BaseMoney;
  includedDiscounts: Array<DiscountedLineItemPortion>;
};

export type DiscountedLineItemPriceForQuantity = {
  quantity: Scalars['Long'];
  discountedPrice: DiscountedLineItemPrice;
};

export type DiscountedProductPriceValue = {
  value: BaseMoney;
  discountRef: Reference;
  discount?: Maybe<ProductDiscount>;
  /**
   * Temporal. Will be renamed some time in the future. Please use 'discount'.
   * @deprecated Will be removed in the future. Please use 'discount'.
   */
  discountRel?: Maybe<ProductDiscount>;
};

export type EnumAttributeDefinitionType = AttributeDefinitionType & {
  values: PlainEnumValueResult;
  name: Scalars['String'];
};


export type EnumAttributeDefinitionTypeValuesArgs = {
  includeKeys?: Maybe<Array<Scalars['String']>>;
  excludeKeys?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Scalars['String']>>;
};

export type Extension = Versioned & {
  key?: Maybe<Scalars['String']>;
  destination: ExtensionDestination;
  triggers: Array<Trigger>;
  timeoutInMs?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type ExtensionDestination = {
  type: Scalars['String'];
};

export type ExtensionLimitsProjection = {
  timeoutInMs: Limit;
};

export type ExtensionQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Extension>;
};

export type ExternalOAuth = {
  url: Scalars['String'];
  authorizationHeader: Scalars['String'];
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinition = {
  name: Scalars['String'];
  required: Scalars['Boolean'];
  inputHint: TextInputHint;
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
  type: FieldType;
};


/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinitionLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type FieldType = {
  name: Scalars['String'];
};

export type Geometry = {
  type: Scalars['String'];
};

export type Image = {
  url: Scalars['String'];
  dimensions: Dimensions;
  label?: Maybe<Scalars['String']>;
};

export type InStore = CartQueryInterface & CustomerActiveCartInterface & OrderQueryInterface & CustomerQueryInterface & ShippingMethodsByCartInterface & MeFieldInterface & {
  /**
   * This field can only be used with an access token created with the password flow or with an anonymous session.
   *
   * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
   */
  me: InStoreMe;
  shippingMethodsByCart: Array<ShippingMethod>;
  customer?: Maybe<Customer>;
  customers: CustomerQueryResult;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  customerActiveCart?: Maybe<Cart>;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


export type InStoreShippingMethodsByCartArgs = {
  id: Scalars['String'];
};


export type InStoreCustomerArgs = {
  emailToken?: Maybe<Scalars['String']>;
  passwordToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type InStoreCustomersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type InStoreCartArgs = {
  id: Scalars['String'];
};


export type InStoreCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type InStoreCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};


export type InStoreOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type InStoreOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type InStoreShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type InStoreShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type InStoreMe = MeQueryInterface & CartQueryInterface & ActiveCartInterface & OrderQueryInterface & ShoppingListQueryInterface & {
  customer?: Maybe<Customer>;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  activeCart?: Maybe<Cart>;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


export type InStoreMeCartArgs = {
  id: Scalars['String'];
};


export type InStoreMeCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type InStoreMeOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type InStoreMeOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type InStoreMeShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type InStoreMeShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Initiator = {
  isPlatformClient?: Maybe<Scalars['Boolean']>;
  externalUserId?: Maybe<Scalars['String']>;
  anonymousId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  /** @deprecated Use 'customerRef' to fetch the reference. */
  customer?: Maybe<Reference>;
  /** @deprecated Use 'userRef' to fetch the reference. */
  user?: Maybe<Reference>;
  customerRef?: Maybe<Reference>;
  userRef?: Maybe<Reference>;
};

export type InterfaceInteractionsRaw = {
  typeRef: Reference;
  type?: Maybe<TypeDefinition>;
  fields: Array<RawCustomField>;
};


export type InterfaceInteractionsRawFieldsArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type InterfaceInteractionsRawResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  results: Array<InterfaceInteractionsRaw>;
};

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type InventoryEntry = Versioned & {
  sku: Scalars['String'];
  quantityOnStock: Scalars['Long'];
  availableQuantity: Scalars['Long'];
  key?: Maybe<Scalars['String']>;
  restockableInDays?: Maybe<Scalars['Int']>;
  expectedDelivery?: Maybe<Scalars['DateTime']>;
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type InventoryEntryCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type InventoryEntryQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<InventoryEntry>;
};

export enum InventoryMode {
  /**
   * Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  None = 'None',
  /**
   * Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */
  ReserveOnOrder = 'ReserveOnOrder',
  /**
   * Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */
  TrackOnly = 'TrackOnly'
}

export type ItemShippingDetails = {
  targets: Array<ItemShippingTarget>;
  valid: Scalars['Boolean'];
};

export type ItemShippingTarget = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ItemState = {
  quantity: Scalars['Long'];
  stateRef: Reference;
  state?: Maybe<State>;
};


export type KeyReference = {
  typeId: Scalars['String'];
  key: Scalars['String'];
};


export type Limit = {
  limit?: Maybe<Scalars['Long']>;
};

export type LimitWithCurrent = {
  limit?: Maybe<Scalars['Long']>;
  current: Scalars['Long'];
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItem = {
  id: Scalars['String'];
  productId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  productSlug?: Maybe<Scalars['String']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef?: Maybe<Reference>;
  variant?: Maybe<ProductVariant>;
  price: ProductPrice;
  taxedPrice?: Maybe<TaxedItemPrice>;
  totalPrice?: Maybe<Money>;
  quantity: Scalars['Long'];
  addedAt?: Maybe<Scalars['DateTime']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']>;
  state: Array<ItemState>;
  taxRate?: Maybe<TaxRate>;
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  distributionChannel?: Maybe<Channel>;
  distributionChannelRef?: Maybe<Reference>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  lineItemMode: LineItemMode;
  priceMode: LineItemPriceMode;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  shippingDetails?: Maybe<ItemShippingDetails>;
  inventoryMode?: Maybe<ItemShippingDetails>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemProductSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export enum LineItemMode {
  /**
   * The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  GiftLineItem = 'GiftLineItem',
  /**
   * The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */
  Standard = 'Standard'
}

export enum LineItemPriceMode {
  /** The price is selected form the product variant. This is the default mode. */
  Platform = 'Platform',
  /** The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given. */
  ExternalPrice = 'ExternalPrice',
  /** The line item price with the total was set externally. */
  ExternalTotal = 'ExternalTotal'
}


export type LocalizableEnumAttributeDefinitionType = AttributeDefinitionType & {
  values: LocalizableEnumValueTypeResult;
  name: Scalars['String'];
};


export type LocalizableEnumAttributeDefinitionTypeValuesArgs = {
  includeKeys?: Maybe<Array<Scalars['String']>>;
  excludeKeys?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Scalars['String']>>;
};

export type LocalizableEnumValueType = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};


export type LocalizableEnumValueTypeLabelArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type LocalizableEnumValueTypeResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  results: Array<LocalizableEnumValueType>;
};

export type LocalizableTextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type LocalizedString = {
  locale: Scalars['Locale'];
  value: Scalars['String'];
};

export type LocalizedText = {
  text: Scalars['String'];
  locale: Scalars['Locale'];
};

export type Location = {
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
};

export type Me = MeQueryInterface & CartQueryInterface & ActiveCartInterface & OrderQueryInterface & ShoppingListQueryInterface & {
  customer?: Maybe<Customer>;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  activeCart?: Maybe<Cart>;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
  payment?: Maybe<MyPayment>;
  payments: MyPaymentQueryResult;
};


export type MeCartArgs = {
  id: Scalars['String'];
};


export type MeCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MeOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type MeOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MeShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MeShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MePaymentArgs = {
  id: Scalars['String'];
};


export type MePaymentsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** The me field gives access to the data that is specific to the customer or anonymous session linked to the access token. */
export type MeFieldInterface = {
  me: MeQueryInterface;
};

export type MeQueryInterface = {
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  activeCart?: Maybe<Cart>;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


export type MeQueryInterfaceCartArgs = {
  id: Scalars['String'];
};


export type MeQueryInterfaceCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MeQueryInterfaceOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type MeQueryInterfaceOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MeQueryInterfaceShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type MeQueryInterfaceShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Message = Versioned & {
  id: Scalars['String'];
  type: Scalars['String'];
  sequenceNumber: Scalars['Long'];
  resourceRef: Reference;
  resourceVersion: Scalars['Long'];
  userProvidedIdentifiers?: Maybe<UserProvidedIdentifiers>;
  payload: MessagePayload;
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type MessagePayload = {
  type: Scalars['String'];
};

export type MessageQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Message>;
};

export type MessageSubscription = {
  resourceTypeId: Scalars['String'];
  types: Array<Scalars['String']>;
};

export type MessagesConfiguration = {
  enabled: Scalars['Boolean'];
  deleteDaysAfterCreation?: Maybe<Scalars['Int']>;
};

export type Money = BaseMoney & {
  type: Scalars['String'];
  currencyCode: Scalars['Currency'];
  centAmount: Scalars['Long'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars['Int'];
};

export type MoneyAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

/**
 * My Payments endpoint provides access to payments scoped to a specific user.
 * [documentation](https://docs.commercetools.com/http-api-projects-me-payments#mypayment)
 */
export type MyPayment = {
  id: Scalars['String'];
  version: Scalars['Long'];
  customerRef?: Maybe<Reference>;
  customer?: Maybe<Customer>;
  anonymousId?: Maybe<Scalars['String']>;
  paymentMethodInfo: PaymentMethodInfo;
  amountPlanned: Money;
  transactions: Array<Transaction>;
  custom?: Maybe<CustomFieldsType>;
};

export type MyPaymentQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<MyPayment>;
};

export type NestedAttributeDefinitionType = AttributeDefinitionType & {
  /** @deprecated Use 'typeRef' to fetch the reference. */
  typeReference: Reference;
  typeRef: Reference;
  name: Scalars['String'];
};

export type NotificationFormat = {
  type: Scalars['String'];
};

export type NumberAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/http-api-projects-orders.html)
 */
export type Order = Versioned & {
  customerId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']>;
  anonymousId?: Maybe<Scalars['String']>;
  lineItems: Array<LineItem>;
  customLineItems: Array<CustomLineItem>;
  totalPrice: Money;
  taxedPrice?: Maybe<TaxedPrice>;
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  inventoryMode: InventoryMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxCalculationMode: TaxCalculationMode;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']>;
  shippingInfo?: Maybe<ShippingInfo>;
  discountCodes: Array<DiscountCodeInfo>;
  refusedGifts: Array<CartDiscount>;
  refusedGiftsRefs: Array<Reference>;
  paymentInfo?: Maybe<PaymentInfo>;
  locale?: Maybe<Scalars['Locale']>;
  shippingRateInput?: Maybe<ShippingRateInput>;
  origin: CartOrigin;
  /** beta feature */
  storeRef?: Maybe<KeyReference>;
  /** beta feature */
  store?: Maybe<Store>;
  itemShippingAddresses: Array<Address>;
  completedAt?: Maybe<Scalars['DateTime']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderState: OrderState;
  stateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  shipmentState?: Maybe<ShipmentState>;
  paymentState?: Maybe<PaymentState>;
  syncInfo: Array<SyncInfo>;
  returnInfo: Array<ReturnInfo>;
  lastMessageSequenceNumber: Scalars['Long'];
  cartRef?: Maybe<Reference>;
  cart?: Maybe<Cart>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/http-api-projects-orders.html)
 */
export type OrderCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type OrderEdit = Versioned & {
  key?: Maybe<Scalars['String']>;
  resourceRef: Reference;
  resource?: Maybe<Order>;
  stagedActions: Array<StagedOrderUpdateActionOutput>;
  result: OrderEditResult;
  comment?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type OrderEditLimitsProjection = {
  total: LimitWithCurrent;
};

export type OrderEditQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<OrderEdit>;
};

export type OrderEditResult = {
  type: Scalars['String'];
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterface = {
  order?: Maybe<Order>;
  orders: OrderQueryResult;
};


/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OrderQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Order>;
};

export enum OrderState {
  Confirmed = 'Confirmed',
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Open = 'Open'
}

export type Parcel = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
  items: Array<DeliveryItem>;
};

export type ParcelMeasurements = {
  heightInMillimeter?: Maybe<Scalars['Int']>;
  lengthInMillimeter?: Maybe<Scalars['Int']>;
  widthInMillimeter?: Maybe<Scalars['Int']>;
  weightInGram?: Maybe<Scalars['Int']>;
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/http-api-projects-payments)
 */
export type Payment = Versioned & {
  key?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Reference>;
  customer?: Maybe<Customer>;
  anonymousId?: Maybe<Scalars['String']>;
  interfaceId?: Maybe<Scalars['String']>;
  amountPlanned: Money;
  /** @deprecated https://docs.commercetools.com/release-notes.html#releases-2017-09-29-payment-api-beta-changes */
  amountAuthorized?: Maybe<Money>;
  /** @deprecated https://docs.commercetools.com/release-notes.html#releases-2017-09-29-payment-api-beta-changes */
  authorizedUntil?: Maybe<Scalars['DateTime']>;
  /** @deprecated https://docs.commercetools.com/release-notes.html#releases-2017-09-29-payment-api-beta-changes */
  amountPaid?: Maybe<Money>;
  /** @deprecated https://docs.commercetools.com/release-notes.html#releases-2017-09-29-payment-api-beta-changes */
  amountRefunded?: Maybe<Money>;
  paymentMethodInfo: PaymentMethodInfo;
  paymentStatus: PaymentStatus;
  transactions: Array<Transaction>;
  interfaceInteractionsRaw: InterfaceInteractionsRawResult;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/http-api-projects-payments)
 */
export type PaymentInterfaceInteractionsRawArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/http-api-projects-payments)
 */
export type PaymentCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type PaymentInfo = {
  payments: Array<Payment>;
  paymentRefs: Array<Reference>;
};

export type PaymentMethodInfo = {
  paymentInterface?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
};


export type PaymentMethodInfoNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type PaymentQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Payment>;
};

export enum PaymentState {
  Paid = 'Paid',
  CreditOwed = 'CreditOwed',
  Pending = 'Pending',
  Failed = 'Failed',
  BalanceDue = 'BalanceDue'
}

export type PaymentStatus = {
  interfaceCode?: Maybe<Scalars['String']>;
  interfaceText?: Maybe<Scalars['String']>;
  stateRef?: Maybe<Reference>;
  state?: Maybe<State>;
};

export type PlainEnumValue = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type PlainEnumValueResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  results: Array<PlainEnumValue>;
};

export type Product = Versioned & ReviewTarget & {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  version: Scalars['Long'];
  productTypeRef: Reference;
  productType?: Maybe<ProductTypeDefinition>;
  masterData: ProductCatalogData;
  /** @deprecated only 'masterData' supported */
  catalogData?: Maybe<ProductCatalogData>;
  skus: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  stateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  taxCategoryRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type ProductCatalogDataArgs = {
  id: Scalars['String'];
};

export type ProductCatalogData = {
  current?: Maybe<ProductData>;
  staged?: Maybe<ProductData>;
  published: Scalars['Boolean'];
  hasStagedChanges: Scalars['Boolean'];
};

export type ProductData = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  categoryOrderHint?: Maybe<Scalars['String']>;
  categoryOrderHints: Array<CategoryOrderHint>;
  categoriesRef: Array<Reference>;
  categories: Array<Category>;
  searchKeyword?: Maybe<Array<SearchKeyword>>;
  searchKeywords: Array<SearchKeywords>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  masterVariant: ProductVariant;
  variants: Array<ProductVariant>;
  allVariants: Array<ProductVariant>;
  variant?: Maybe<ProductVariant>;
  skus: Array<Scalars['String']>;
};


export type ProductDataNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataCategoryOrderHintArgs = {
  categoryId: Scalars['String'];
};


export type ProductDataSearchKeywordArgs = {
  locale: Scalars['Locale'];
};


export type ProductDataMetaTitleArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataMetaKeywordsArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataMetaDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ProductDataVariantsArgs = {
  skus?: Maybe<Array<Scalars['String']>>;
  isOnStock?: Maybe<Scalars['Boolean']>;
  stockChannelIds?: Maybe<Array<Scalars['String']>>;
  hasImages?: Maybe<Scalars['Boolean']>;
};


export type ProductDataAllVariantsArgs = {
  skus?: Maybe<Array<Scalars['String']>>;
  isOnStock?: Maybe<Scalars['Boolean']>;
  stockChannelIds?: Maybe<Array<Scalars['String']>>;
  hasImages?: Maybe<Scalars['Boolean']>;
};


export type ProductDataVariantArgs = {
  sku?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

/**
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 */
export type ProductDiscount = Versioned & {
  predicate: Scalars['String'];
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  isActive: Scalars['Boolean'];
  isValid: Scalars['Boolean'];
  sortOrder: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  referenceRefs: Array<Reference>;
  nameAllLocales: Array<LocalizedString>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  value: ProductDiscountValue;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/**
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 */
export type ProductDiscountNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/**
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 */
export type ProductDiscountDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ProductDiscountLimitsProjection = {
  totalActive: LimitWithCurrent;
};

export type ProductDiscountQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<ProductDiscount>;
};

export type ProductDiscountValue = {
  type: Scalars['String'];
};

export type ProductLimitsProjection = {
  pricesPerVariant: Limit;
  variants: Limit;
};

export type ProductPrice = {
  id?: Maybe<Scalars['String']>;
  value: BaseMoney;
  country?: Maybe<Scalars['Country']>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  discounted?: Maybe<DiscountedProductPriceValue>;
  tiers?: Maybe<Array<ProductPriceTier>>;
  /**
   * This field contains non-typed data. Consider using `customFields` as a typed alternative.
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  /**
   * This field would contain type data
   * @deprecated Please use 'custom.customFieldsRaw'
   */
  customFields?: Maybe<Type>;
  custom?: Maybe<CustomFieldsType>;
};


export type ProductPriceCustomFieldsRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type ProductPriceTier = {
  minimumQuantity: Scalars['Int'];
  value: BaseMoney;
};

export type ProductQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Product>;
};

export type ProductTypeDefinition = Versioned & {
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
  attributeDefinitions: AttributeDefinitionResult;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type ProductTypeDefinitionAttributeDefinitionsArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Scalars['String']>>;
};

export type ProductTypeDefinitionQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<ProductTypeDefinition>;
};

export type ProductVariant = {
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  prices?: Maybe<Array<ProductPrice>>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPrice>;
  images: Array<Image>;
  assets: Array<Asset>;
  availability?: Maybe<ProductVariantAvailabilityWithChannels>;
  /** This field contains non-typed data. Consider using `attributes` as a typed alternative. */
  attributesRaw: Array<RawProductAttribute>;
};


export type ProductVariantPriceArgs = {
  currency: Scalars['Currency'];
  country?: Maybe<Scalars['Country']>;
  customerGroupId?: Maybe<Scalars['String']>;
  channelId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
};


export type ProductVariantAttributesRawArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

/** Product variant availabilities */
export type ProductVariantAvailabilitiesResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  results: Array<ProductVariantAvailabilityWithChannel>;
};

/** Product variant availability */
export type ProductVariantAvailability = {
  isOnStock: Scalars['Boolean'];
  restockableInDays?: Maybe<Scalars['Int']>;
  availableQuantity?: Maybe<Scalars['Long']>;
};

export type ProductVariantAvailabilityWithChannel = {
  channelRef: Reference;
  channel?: Maybe<Channel>;
  availability: ProductVariantAvailability;
};

export type ProductVariantAvailabilityWithChannels = {
  noChannel?: Maybe<ProductVariantAvailability>;
  channels: ProductVariantAvailabilitiesResult;
};


export type ProductVariantAvailabilityWithChannelsChannelsArgs = {
  includeChannelIds?: Maybe<Array<Scalars['String']>>;
  excludeChannelIds?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** Contains information about the limits of your project. */
export type ProjectCustomLimitsProjection = {
  query: QueryLimitsProjection;
  products: ProductLimitsProjection;
  shoppingLists: ShoppingListLimitsProjection;
  extensions: ExtensionLimitsProjection;
  productDiscounts: ProductDiscountLimitsProjection;
  cartDiscounts: CartDiscountLimitsProjection;
  orderEdits: OrderEditLimitsProjection;
  stores: StoreLimitsProjection;
  customers: CustomerLimitsProjection;
  customerGroups: CustomerGroupLimitsProjection;
  zones: ZoneLimitsProjection;
  taxCategories: TaxCategoryLimitsProjection;
  refreshTokens: RefreshTokenLimitsProjection;
  shippingMethods: ShippingMethodLimitsProjection;
  carts: CartLimitsProjection;
  customObjects: CustomObjectLimitsProjection;
  search: SearchLimitsProjection;
};

/** Project contains information about project. */
export type ProjectProjection = {
  key: Scalars['String'];
  name: Scalars['String'];
  languages: Array<Scalars['Locale']>;
  createdAt: Scalars['DateTime'];
  trialUntil?: Maybe<Scalars['YearMonth']>;
  carts: CartsConfiguration;
  shoppingLists: ShoppingListsConfiguration;
  version: Scalars['Long'];
  externalOAuth?: Maybe<ExternalOAuth>;
  searchIndexing?: Maybe<SearchIndexingConfiguration>;
  messages: MessagesConfiguration;
  countries: Array<Scalars['Country']>;
  currencies: Array<Scalars['Currency']>;
  shippingRateInputType?: Maybe<ShippingRateInputType>;
};

export type Query = CartQueryInterface & CustomerActiveCartInterface & OrderQueryInterface & CustomerQueryInterface & ShoppingListQueryInterface & ShippingMethodsByCartInterface & MeFieldInterface & {
  /**
   * This field can only be used with an access token created with the password flow or with an anonymous session.
   *
   * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
   */
  me: Me;
  /** This field gives access to the resources (such as carts) that are inside the given store. Currently in beta. */
  inStore: InStore;
  /** This field gives access to the resources (such as carts) that are inside one of the given stores. Currently in beta. */
  inStores: InStore;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupQueryResult;
  category?: Maybe<Category>;
  categories: CategoryQueryResult;
  /** Autocomplete the categories based on category fields like name, description, etc. */
  categoryAutocomplete: CategorySearchResult;
  /** Search the categories using full-text search, filtering and sorting */
  categorySearch: CategorySearchResult;
  channel?: Maybe<Channel>;
  channels: ChannelQueryResult;
  customObject?: Maybe<CustomObject>;
  customObjects: CustomObjectQueryResult;
  productType?: Maybe<ProductTypeDefinition>;
  productTypes: ProductTypeDefinitionQueryResult;
  typeDefinition?: Maybe<TypeDefinition>;
  typeDefinitions: TypeDefinitionQueryResult;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodQueryResult;
  shippingMethodsByCart: Array<ShippingMethod>;
  shippingMethodsByLocation: Array<ShippingMethod>;
  zone?: Maybe<Zone>;
  zones: ZoneQueryResult;
  taxCategory?: Maybe<TaxCategory>;
  taxCategories: TaxCategoryQueryResult;
  discountCode?: Maybe<DiscountCode>;
  discountCodes: DiscountCodeQueryResult;
  cartDiscount?: Maybe<CartDiscount>;
  cartDiscounts: CartDiscountQueryResult;
  productDiscount?: Maybe<ProductDiscount>;
  productDiscounts: ProductDiscountQueryResult;
  product?: Maybe<Product>;
  products: ProductQueryResult;
  state?: Maybe<State>;
  states: StateQueryResult;
  customer?: Maybe<Customer>;
  customers: CustomerQueryResult;
  inventoryEntry?: Maybe<InventoryEntry>;
  inventoryEntries: InventoryEntryQueryResult;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  customerActiveCart?: Maybe<Cart>;
  message?: Maybe<Message>;
  messages: MessageQueryResult;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  orderEdit?: Maybe<OrderEdit>;
  orderEdits: OrderEditQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
  payment?: Maybe<Payment>;
  payments: PaymentQueryResult;
  productProjectionsSuggest: SuggestResult;
  project: ProjectProjection;
  /** beta feature */
  store?: Maybe<Store>;
  /** beta feature */
  stores: StoreQueryResult;
  review?: Maybe<Review>;
  reviews: ReviewQueryResult;
  subscription?: Maybe<Subscription>;
  subscriptions: SubscriptionQueryResult;
  extension?: Maybe<Extension>;
  extensions: ExtensionQueryResult;
  apiClient?: Maybe<ApiClientWithoutSecret>;
  apiClients: ApiClientWithoutSecretQueryResult;
  limits: ProjectCustomLimitsProjection;
};


export type QueryInStoreArgs = {
  key: Scalars['KeyReferenceInput'];
};


export type QueryInStoresArgs = {
  keys: Array<Scalars['KeyReferenceInput']>;
};


export type QueryCustomerGroupArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryCustomerGroupsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCategoryAutocompleteArgs = {
  locale: Scalars['Locale'];
  text: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filters?: Maybe<Array<Scalars['SearchFilter']>>;
};


export type QueryCategorySearchArgs = {
  fulltext?: Maybe<LocalizedText>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  queryFilters?: Maybe<Array<Scalars['SearchFilter']>>;
  filters?: Maybe<Array<Scalars['SearchFilter']>>;
  sorts?: Maybe<Array<Scalars['SearchSort']>>;
};


export type QueryChannelArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryChannelsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCustomObjectArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['String']>;
};


export type QueryCustomObjectsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  container: Scalars['String'];
};


export type QueryProductTypeArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryProductTypesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryTypeDefinitionArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryTypeDefinitionsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShippingMethodArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryShippingMethodsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShippingMethodsByCartArgs = {
  id: Scalars['String'];
};


export type QueryShippingMethodsByLocationArgs = {
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['Currency']>;
};


export type QueryZoneArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryZonesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryTaxCategoryArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryTaxCategoriesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryDiscountCodeArgs = {
  id: Scalars['String'];
};


export type QueryDiscountCodesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCartDiscountArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryCartDiscountsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryProductDiscountArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryProductDiscountsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  sku?: Maybe<Scalars['String']>;
  variantKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  skus?: Maybe<Array<Scalars['String']>>;
};


export type QueryStateArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryStatesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCustomerArgs = {
  emailToken?: Maybe<Scalars['String']>;
  passwordToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryCustomersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryInventoryEntryArgs = {
  id: Scalars['String'];
};


export type QueryInventoryEntriesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCartArgs = {
  id: Scalars['String'];
};


export type QueryCartsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};


export type QueryMessageArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryMessagesArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryOrderEditArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryOrderEditsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryPaymentsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryProductProjectionsSuggestArgs = {
  searchKeywords: Array<SearchKeywordArgument>;
  fuzzy?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  staged?: Maybe<Scalars['Boolean']>;
};


export type QueryStoreArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryStoresArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReviewArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryReviewsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QuerySubscriptionArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryExtensionArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryExtensionsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryApiClientArgs = {
  id: Scalars['String'];
};


export type QueryApiClientsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryLimitsProjection = {
  offset: Limit;
};

export type RawCustomField = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

export type RawProductAttribute = {
  name: Scalars['String'];
  value: Scalars['Json'];
  attributeDefinition?: Maybe<AttributeDefinition>;
};

export type Reference = {
  typeId: Scalars['String'];
  id: Scalars['String'];
};

export type ReferenceAttributeDefinitionType = AttributeDefinitionType & {
  referenceTypeId: Scalars['String'];
  name: Scalars['String'];
};

export type RefreshTokenLimitsProjection = {
  total: LimitWithCurrent;
};

/** Stores information about returns connected to this order. */
export type ReturnInfo = {
  items: Array<ReturnItem>;
  returnTrackingId?: Maybe<Scalars['String']>;
  returnDate?: Maybe<Scalars['DateTime']>;
};

export type ReturnItem = {
  type: Scalars['String'];
  id: Scalars['String'];
  quantity: Scalars['Long'];
  comment?: Maybe<Scalars['String']>;
  shipmentState: ReturnShipmentState;
  paymentState: ReturnPaymentState;
  lastModifiedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export enum ReturnPaymentState {
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded',
  Initial = 'Initial',
  NonRefundable = 'NonRefundable'
}

export enum ReturnShipmentState {
  Unusable = 'Unusable',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Advised = 'Advised'
}

export type Review = Versioned & {
  key?: Maybe<Scalars['String']>;
  uniquenessValue?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['Locale']>;
  authorName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  targetRef?: Maybe<Reference>;
  target?: Maybe<ReviewTarget>;
  rating?: Maybe<Scalars['Int']>;
  stateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  includedInStatistics: Scalars['Boolean'];
  customerRef?: Maybe<Reference>;
  customer?: Maybe<Customer>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type ReviewQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Review>;
};

export type ReviewRatingStatistics = {
  averageRating: Scalars['Float'];
  highestRating: Scalars['Int'];
  lowestRating: Scalars['Int'];
  count: Scalars['Long'];
  ratingsDistribution: Scalars['Json'];
};

export type ReviewTarget = {
  id: Scalars['String'];
};

export enum RoundingMode {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down). Rounding mode used by, e.g., [Avalara Sales TaxII](https://help.avalara.com/kb/001/How_does_Rounding_with_SalesTaxII_work%3F) */
  HalfDown = 'HalfDown',
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */
  HalfUp = 'HalfUp',
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Default rounding mode as used in IEEE 754 computing functions and operators. */
  HalfEven = 'HalfEven'
}


export type SearchIndexingConfiguration = {
  products?: Maybe<SearchIndexingConfigurationValues>;
};

export type SearchIndexingConfigurationValues = {
  status?: Maybe<SearchIndexingStatus>;
};

export enum SearchIndexingStatus {
  Enabled = 'Enabled',
  Indexing = 'Indexing',
  Disabled = 'Disabled'
}

export type SearchKeyword = {
  text: Scalars['String'];
  suggestTokenizer?: Maybe<SuggestTokenizer>;
};

export type SearchKeywordArgument = {
  searchKeyword: Scalars['String'];
  locale: Scalars['Locale'];
};

export type SearchKeywords = {
  locale: Scalars['Locale'];
  searchKeywords: Array<SearchKeyword>;
};

export type SearchLimitsProjection = {
  maxTextSize: Limit;
};


export type SetAttributeDefinitionType = AttributeDefinitionType & {
  elementType: AttributeDefinitionType;
  name: Scalars['String'];
};

export enum ShipmentState {
  Delayed = 'Delayed',
  Backorder = 'Backorder',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped'
}

export type ShippingInfo = {
  shippingMethodName: Scalars['String'];
  price: Money;
  shippingRate: ShippingRate;
  taxRate?: Maybe<TaxRate>;
  deliveries: Array<Delivery>;
  discountedPrice?: Maybe<DiscountedLineItemPrice>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  shippingMethodState: ShippingMethodState;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
};

export type ShippingMethod = Versioned & {
  name: Scalars['String'];
  /** @deprecated Use localizedDescription */
  description?: Maybe<Scalars['String']>;
  zoneRates: Array<ZoneRate>;
  isDefault: Scalars['Boolean'];
  predicate?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  taxCategoryRef?: Maybe<Reference>;
  localizedDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  localizedDescription?: Maybe<Scalars['String']>;
  taxCategory?: Maybe<TaxCategory>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type ShippingMethodLocalizedDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ShippingMethodLimitsProjection = {
  total: LimitWithCurrent;
};

export type ShippingMethodQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<ShippingMethod>;
};

export enum ShippingMethodState {
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart',
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart'
}

/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterface = {
  shippingMethodsByCart: Array<ShippingMethod>;
};


/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterfaceShippingMethodsByCartArgs = {
  id: Scalars['String'];
};

/** Shipping Rate */
export type ShippingRate = {
  price: Money;
  freeAbove?: Maybe<Money>;
  isMatching?: Maybe<Scalars['Boolean']>;
  tiers: Array<ShippingRatePriceTier>;
};

export type ShippingRateInput = {
  type: Scalars['String'];
};

export type ShippingRateInputType = {
  type: Scalars['String'];
};

export type ShippingRatePriceTier = {
  type: Scalars['String'];
};

export type ShoppingList = Versioned & {
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  customerRef?: Maybe<Reference>;
  customer?: Maybe<Customer>;
  storeRef?: Maybe<KeyReference>;
  store?: Maybe<Store>;
  anonymousId?: Maybe<Scalars['String']>;
  lineItems: Array<ShoppingListLineItem>;
  textLineItems: Array<TextLineItem>;
  custom?: Maybe<CustomFieldsType>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


export type ShoppingListNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ShoppingListDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ShoppingListSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type ShoppingListLimitsProjection = {
  lineItems: Limit;
  textLineItems: Limit;
  total: LimitWithCurrent;
};

export type ShoppingListLineItem = {
  id: Scalars['String'];
  productId: Scalars['String'];
  variantId?: Maybe<Scalars['Int']>;
  productTypeRef: Reference;
  productType: ProductTypeDefinition;
  quantity: Scalars['Int'];
  addedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<CustomFieldsType>;
  productSlug?: Maybe<Scalars['String']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  variant?: Maybe<ProductVariant>;
};


export type ShoppingListLineItemNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type ShoppingListLineItemProductSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterface = {
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListArgs = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListsArgs = {
  where?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ShoppingListQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<ShoppingList>;
};

export type ShoppingListsConfiguration = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

/** Describes how this discount interacts with other discounts */
export enum StackingMode {
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount',
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking'
}

export type StagedOrderUpdateActionOutput = {
  type: Scalars['String'];
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type State = Versioned & {
  id: Scalars['String'];
  version: Scalars['Long'];
  key?: Maybe<Scalars['String']>;
  type: StateType;
  roles: Array<StateRole>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  builtIn: Scalars['Boolean'];
  transitionsRef?: Maybe<Array<Reference>>;
  transitions?: Maybe<Array<State>>;
  initial: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type StateQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<State>;
};

export enum StateRole {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics'
}

export enum StateType {
  OrderState = 'OrderState',
  ProductState = 'ProductState',
  ReviewState = 'ReviewState',
  PaymentState = 'PaymentState',
  LineItemState = 'LineItemState'
}

/** [BETA] Stores allow defining different contexts for a project. */
export type Store = Versioned & {
  id: Scalars['String'];
  version: Scalars['Long'];
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  languages?: Maybe<Array<Scalars['Locale']>>;
  distributionChannelsRef: Array<Reference>;
  distributionChannels: Array<Channel>;
  supplyChannelsRef: Array<Reference>;
  supplyChannels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** [BETA] Stores allow defining different contexts for a project. */
export type StoreNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type StoreLimitsProjection = {
  total: LimitWithCurrent;
};

export type StoreQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Store>;
};

export type SubRate = {
  name: Scalars['String'];
  amount: Scalars['Float'];
};

export type Subscription = Versioned & {
  key?: Maybe<Scalars['String']>;
  destination: Destination;
  messages: Array<MessageSubscription>;
  changes: Array<ChangeSubscription>;
  format: NotificationFormat;
  status: SubscriptionHealthStatus;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export enum SubscriptionHealthStatus {
  TemporaryError = 'TemporaryError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  ConfigurationError = 'ConfigurationError',
  Healthy = 'Healthy'
}

export type SubscriptionQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Subscription>;
};

export type SuggestResult = {
  searchKeywords: Array<SuggestResultEntry>;
};

export type SuggestResultEntry = {
  locale: Scalars['Locale'];
  suggestions: Array<Suggestion>;
};

export type SuggestTokenizer = {
  type: Scalars['String'];
};

export type Suggestion = {
  text: Scalars['String'];
};

/** Stores information about order synchronization activities (like export or import). */
export type SyncInfo = {
  channelRef: Reference;
  channel?: Maybe<Channel>;
  externalId?: Maybe<Scalars['String']>;
  syncedAt: Scalars['DateTime'];
};

export enum TaxCalculationMode {
  /**
   * This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  UnitPriceLevel = 'UnitPriceLevel',
  /**
   * Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */
  LineItemLevel = 'LineItemLevel'
}

/** Tax Categories define how products are to be taxed in different countries. */
export type TaxCategory = Versioned & {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  rates: Array<TaxRate>;
  key?: Maybe<Scalars['String']>;
  /** @deprecated Use 'taxCategoryRef' to fetch the reference. */
  typeId: Scalars['String'];
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type TaxCategoryLimitsProjection = {
  total: LimitWithCurrent;
};

export type TaxCategoryQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<TaxCategory>;
};

export enum TaxMode {
  /** No taxes are added to the cart. */
  Disabled = 'Disabled',
  /**
   * The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */
  ExternalAmount = 'ExternalAmount',
  /**
   * The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated by the platform according to the taxRoundingMode.
   */
  External = 'External',
  /**
   * The tax rates are selected by the platform from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated by the platform according to the
   * taxRoundingMode.
   */
  Platform = 'Platform'
}

/**
 * Represents the portions that sum up to the totalGross field of a TaxedPrice. The portions are calculated
 * from the TaxRates. If a tax rate has SubRates, they are used and can be identified by name. Tax portions
 * from line items that have the same rate and name will be accumulated to the same tax portion.
 */
export type TaxPortion = {
  rate: Scalars['Float'];
  amount: Money;
  name?: Maybe<Scalars['String']>;
};

export type TaxRate = {
  name: Scalars['String'];
  amount: Scalars['Float'];
  includedInPrice: Scalars['Boolean'];
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  subRates: Array<SubRate>;
};

export type TaxedItemPrice = {
  totalNet: Money;
  totalGross: Money;
};

export type TaxedPrice = {
  totalNet: Money;
  totalGross: Money;
  taxPortions: Array<TaxPortion>;
};

export type TextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum TextInputHint {
  SingleLine = 'SingleLine',
  MultiLine = 'MultiLine'
}

export type TextLineItem = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  quantity: Scalars['Int'];
  custom?: Maybe<CustomFieldsType>;
  addedAt: Scalars['DateTime'];
};


export type TextLineItemNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


export type TextLineItemDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

export type TimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type TrackingData = {
  trackingId?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerTransaction?: Maybe<Scalars['String']>;
  isReturn: Scalars['Boolean'];
};

export type Transaction = {
  id: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
  type?: Maybe<TransactionType>;
  amount: Money;
  interactionId?: Maybe<Scalars['String']>;
  state: TransactionState;
};

export enum TransactionState {
  Failure = 'Failure',
  Success = 'Success',
  Pending = 'Pending',
  Initial = 'Initial'
}

export enum TransactionType {
  Chargeback = 'Chargeback',
  Refund = 'Refund',
  Charge = 'Charge',
  CancelAuthorization = 'CancelAuthorization',
  Authorization = 'Authorization'
}

export type Trigger = {
  resourceTypeId: Scalars['String'];
  actions: Array<ActionType>;
};

export type Type = {
  typeRef: Reference;
  type?: Maybe<TypeDefinition>;
};

/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinition = Versioned & {
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  resourceTypeIds: Array<Scalars['String']>;
  fieldDefinitions: Array<FieldDefinition>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionNameArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionDescriptionArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};


/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionFieldDefinitionsArgs = {
  includeNames?: Maybe<Array<Scalars['String']>>;
  excludeNames?: Maybe<Array<Scalars['String']>>;
};

export type TypeDefinitionQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<TypeDefinition>;
};

export type UserProvidedIdentifiers = {
  key?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  customerNumber?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
};


export type UserProvidedIdentifiersSlugArgs = {
  locale?: Maybe<Scalars['Locale']>;
  acceptLanguage?: Maybe<Array<Scalars['Locale']>>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type Versioned = {
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};


/** Zones allow defining ShippingRates for specific Locations. */
export type Zone = Versioned & {
  name: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  locations: Array<Location>;
  id: Scalars['String'];
  version: Scalars['Long'];
  createdAt: Scalars['DateTime'];
  lastModifiedAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type ZoneLimitsProjection = {
  total: LimitWithCurrent;
};

export type ZoneQueryResult = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
  total: Scalars['Long'];
  results: Array<Zone>;
};

export type ZoneRate = {
  shippingRates: Array<ShippingRate>;
  zoneRef?: Maybe<Reference>;
  zone?: Maybe<Zone>;
};



export type AddProductBundleMutationVariables = Exact<{
  name: Scalars['String'];
  slug: Scalars['String'];
  productReferences: Scalars['String'];
}>;


export type AddProductBundleMutation = { createProduct?: Maybe<Pick<Product, 'id' | 'version'>> };

export type SetProductAttributesMutationVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  version: Scalars['Long'];
  fieldName: Scalars['String'];
  value: Scalars['String'];
}>;


export type SetProductAttributesMutation = { updateProduct?: Maybe<Pick<Product, 'id' | 'version'>> };

export type GetCategoriesQueryVariables = Exact<{
  locale?: Maybe<Scalars['Locale']>;
  where?: Maybe<Scalars['String']>;
}>;


export type GetCategoriesQuery = { categories: (
    Pick<CategoryQueryResult, 'total'>
    & { results: Array<(
      Pick<Category, 'id' | 'name' | 'description'>
      & { ancestors: Array<Pick<Category, 'id' | 'name'>> }
    )> }
  ) };

export type GetProductTypeDefinitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductTypeDefinitionsQuery = { productTypes: (
    Pick<ProductTypeDefinitionQueryResult, 'total'>
    & { results: Array<Pick<ProductTypeDefinition, 'key' | 'name' | 'description' | 'id'>> }
  ) };

export type GetProductsQueryVariables = Exact<{
  locale?: Maybe<Scalars['Locale']>;
  where?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = { products: (
    Pick<ProductQueryResult, 'total'>
    & { results: Array<(
      Pick<Product, 'id' | 'version'>
      & { productType?: Maybe<Pick<ProductTypeDefinition, 'id' | 'key'>>, masterData: { current?: Maybe<Pick<ProductData, 'name'>> } }
    )> }
  ) };

export type GetProjectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectQuery = { project: Pick<ProjectProjection, 'currencies'> };

export type GetVariantsQueryVariables = Exact<{
  locale?: Maybe<Scalars['Locale']>;
  where?: Maybe<Scalars['String']>;
}>;


export type GetVariantsQuery = { products: (
    Pick<ProductQueryResult, 'total'>
    & { results: Array<(
      Pick<Product, 'id' | 'version'>
      & { masterData: { current?: Maybe<(
          Pick<ProductData, 'name'>
          & { allVariants: Array<Pick<ProductVariant, 'id' | 'key'>> }
        )> } }
    )> }
  ) };


export const AddProductBundleDocument = gql`
    mutation AddProductBundle($name: String!, $slug: String!, $productReferences: String!) {
  createProduct(
    draft: {name: [{locale: "DA", value: $name}], slug: [{locale: "DA", value: $slug}], productType: {key: "product-bundle"}, masterVariant: {key: $slug, attributes: [{name: "product-ref", value: $productReferences}]}, publish: true}
  ) {
    id
    version
  }
}
    `;
export type AddProductBundleMutationFn = Apollo.MutationFunction<AddProductBundleMutation, AddProductBundleMutationVariables>;

/**
 * __useAddProductBundleMutation__
 *
 * To run a mutation, you first call `useAddProductBundleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductBundleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductBundleMutation, { data, loading, error }] = useAddProductBundleMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      productReferences: // value for 'productReferences'
 *   },
 * });
 */
export function useAddProductBundleMutation(baseOptions?: Apollo.MutationHookOptions<AddProductBundleMutation, AddProductBundleMutationVariables>) {
        return Apollo.useMutation<AddProductBundleMutation, AddProductBundleMutationVariables>(AddProductBundleDocument, baseOptions);
      }
export type AddProductBundleMutationHookResult = ReturnType<typeof useAddProductBundleMutation>;
export type AddProductBundleMutationResult = Apollo.MutationResult<AddProductBundleMutation>;
export type AddProductBundleMutationOptions = Apollo.BaseMutationOptions<AddProductBundleMutation, AddProductBundleMutationVariables>;
export const SetProductAttributesDocument = gql`
    mutation setProductAttributes($id: String, $version: Long!, $fieldName: String!, $value: String!) {
  updateProduct(
    id: $id
    version: $version
    actions: [{setAttributeInAllVariants: {name: $fieldName, value: $value}}, {publish: {}}]
  ) {
    id
    version
  }
}
    `;
export type SetProductAttributesMutationFn = Apollo.MutationFunction<SetProductAttributesMutation, SetProductAttributesMutationVariables>;

/**
 * __useSetProductAttributesMutation__
 *
 * To run a mutation, you first call `useSetProductAttributesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetProductAttributesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setProductAttributesMutation, { data, loading, error }] = useSetProductAttributesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      fieldName: // value for 'fieldName'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useSetProductAttributesMutation(baseOptions?: Apollo.MutationHookOptions<SetProductAttributesMutation, SetProductAttributesMutationVariables>) {
        return Apollo.useMutation<SetProductAttributesMutation, SetProductAttributesMutationVariables>(SetProductAttributesDocument, baseOptions);
      }
export type SetProductAttributesMutationHookResult = ReturnType<typeof useSetProductAttributesMutation>;
export type SetProductAttributesMutationResult = Apollo.MutationResult<SetProductAttributesMutation>;
export type SetProductAttributesMutationOptions = Apollo.BaseMutationOptions<SetProductAttributesMutation, SetProductAttributesMutationVariables>;
export const GetCategoriesDocument = gql`
    query getCategories($locale: Locale, $where: String) {
  categories(where: $where) {
    total
    results {
      id
      name(locale: $locale)
      description(locale: $locale)
      ancestors {
        id
        name(locale: $locale)
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetProductTypeDefinitionsDocument = gql`
    query getProductTypeDefinitions {
  productTypes {
    total
    results {
      key
      name
      description
      id
    }
  }
}
    `;

/**
 * __useGetProductTypeDefinitionsQuery__
 *
 * To run a query within a React component, call `useGetProductTypeDefinitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTypeDefinitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTypeDefinitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductTypeDefinitionsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductTypeDefinitionsQuery, GetProductTypeDefinitionsQueryVariables>) {
        return Apollo.useQuery<GetProductTypeDefinitionsQuery, GetProductTypeDefinitionsQueryVariables>(GetProductTypeDefinitionsDocument, baseOptions);
      }
export function useGetProductTypeDefinitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductTypeDefinitionsQuery, GetProductTypeDefinitionsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductTypeDefinitionsQuery, GetProductTypeDefinitionsQueryVariables>(GetProductTypeDefinitionsDocument, baseOptions);
        }
export type GetProductTypeDefinitionsQueryHookResult = ReturnType<typeof useGetProductTypeDefinitionsQuery>;
export type GetProductTypeDefinitionsLazyQueryHookResult = ReturnType<typeof useGetProductTypeDefinitionsLazyQuery>;
export type GetProductTypeDefinitionsQueryResult = Apollo.QueryResult<GetProductTypeDefinitionsQuery, GetProductTypeDefinitionsQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($locale: Locale, $where: String) {
  products(limit: 500, where: $where) {
    total
    results {
      id
      version
      productType {
        id
        key
      }
      masterData {
        current {
          name(locale: $locale)
        }
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProjectDocument = gql`
    query getProject {
  project {
    currencies
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, baseOptions);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, baseOptions);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetVariantsDocument = gql`
    query getVariants($locale: Locale, $where: String) {
  products(limit: 500, where: $where) {
    total
    results {
      id
      version
      masterData {
        current {
          name(locale: $locale)
          allVariants {
            id
            key
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetVariantsQuery__
 *
 * To run a query within a React component, call `useGetVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetVariantsQuery(baseOptions?: Apollo.QueryHookOptions<GetVariantsQuery, GetVariantsQueryVariables>) {
        return Apollo.useQuery<GetVariantsQuery, GetVariantsQueryVariables>(GetVariantsDocument, baseOptions);
      }
export function useGetVariantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVariantsQuery, GetVariantsQueryVariables>) {
          return Apollo.useLazyQuery<GetVariantsQuery, GetVariantsQueryVariables>(GetVariantsDocument, baseOptions);
        }
export type GetVariantsQueryHookResult = ReturnType<typeof useGetVariantsQuery>;
export type GetVariantsLazyQueryHookResult = ReturnType<typeof useGetVariantsLazyQuery>;
export type GetVariantsQueryResult = Apollo.QueryResult<GetVariantsQuery, GetVariantsQueryVariables>;