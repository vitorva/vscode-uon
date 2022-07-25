// Generated from ../grammar/UON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UonContext } from "./UONParser";
import { Root_valueContext } from "./UONParser";
import { Json_collectionContext } from "./UONParser";
import { Yaml_collection_nestedContext } from "./UONParser";
import { Json_mapContext } from "./UONParser";
import { Json_seqContext } from "./UONParser";
import { Json_user_typeContext } from "./UONParser";
import { Json_valueContext } from "./UONParser";
import { Pair_keyContext } from "./UONParser";
import { Json_pairContext } from "./UONParser";
import { Yaml_collectionContext } from "./UONParser";
import { Yaml_mapContext } from "./UONParser";
import { Yaml_seqContext } from "./UONParser";
import { Seq_itemContext } from "./UONParser";
import { PairContext } from "./UONParser";
import { Yaml_valueContext } from "./UONParser";
import { Yaml_user_typeContext } from "./UONParser";
import { Presentation_propertiesContext } from "./UONParser";
import { Presentation_propertyContext } from "./UONParser";
import { DescriptionContext } from "./UONParser";
import { OptionalContext } from "./UONParser";
import { Types_propertiesContext } from "./UONParser";
import { Types_propertieContext } from "./UONParser";
import { CommentContext } from "./UONParser";
import { Number_presentationContext } from "./UONParser";
import { Number_presentation_propertiesContext } from "./UONParser";
import { Number_presentation_propertieContext } from "./UONParser";
import { UnitContext } from "./UONParser";
import { SchemaContext } from "./UONParser";
import { AttributesContext } from "./UONParser";
import { AttributeContext } from "./UONParser";
import { Schema_presentationsContext } from "./UONParser";
import { Schema_presentationContext } from "./UONParser";
import { Schema_nameContext } from "./UONParser";
import { Schema_uuidContext } from "./UONParser";
import { Validation_propertiesContext } from "./UONParser";
import { String_validationContext } from "./UONParser";
import { String_propertiesContext } from "./UONParser";
import { String_propertyContext } from "./UONParser";
import { String_maxContext } from "./UONParser";
import { String_minContext } from "./UONParser";
import { Url_validationContext } from "./UONParser";
import { Boolean_validationContext } from "./UONParser";
import { Number_validationContext } from "./UONParser";
import { Number_propertiesContext } from "./UONParser";
import { Number_propertyContext } from "./UONParser";
import { Number_maxContext } from "./UONParser";
import { Number_minContext } from "./UONParser";
import { Number_validation_typeContext } from "./UONParser";
import { Quantity_validationContext } from "./UONParser";
import { Quantity_validation_typesContext } from "./UONParser";
import { ScalarContext } from "./UONParser";
import { Quantity_scalarContext } from "./UONParser";
import { Numeric_scalarContext } from "./UONParser";
import { Coercible_numeric_scalarContext } from "./UONParser";
import { String_scalarContext } from "./UONParser";
import { Boolean_scalarContext } from "./UONParser";
import { UrlContext } from "./UONParser";
import { QuantityContext } from "./UONParser";
import { LengthContext } from "./UONParser";
import { MassContext } from "./UONParser";
import { TimeContext } from "./UONParser";
import { TemperatureContext } from "./UONParser";
import { Number_typeContext } from "./UONParser";
import { BooleanContext } from "./UONParser";
import { TrueContext } from "./UONParser";
import { FalseContext } from "./UONParser";
import { NullContext } from "./UONParser";
import { Custom_typeContext } from "./UONParser";
import { StringContext } from "./UONParser";
import { LiteralContext } from "./UONParser";
import { NumberContext } from "./UONParser";
import { Numeric_literalContext } from "./UONParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UONParser`.
 */
export interface UONListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UONParser.uon`.
	 * @param ctx the parse tree
	 */
	enterUon?: (ctx: UonContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.uon`.
	 * @param ctx the parse tree
	 */
	exitUon?: (ctx: UonContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.root_value`.
	 * @param ctx the parse tree
	 */
	enterRoot_value?: (ctx: Root_valueContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.root_value`.
	 * @param ctx the parse tree
	 */
	exitRoot_value?: (ctx: Root_valueContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_collection`.
	 * @param ctx the parse tree
	 */
	enterJson_collection?: (ctx: Json_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_collection`.
	 * @param ctx the parse tree
	 */
	exitJson_collection?: (ctx: Json_collectionContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_collection_nested`.
	 * @param ctx the parse tree
	 */
	enterYaml_collection_nested?: (ctx: Yaml_collection_nestedContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_collection_nested`.
	 * @param ctx the parse tree
	 */
	exitYaml_collection_nested?: (ctx: Yaml_collection_nestedContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_map`.
	 * @param ctx the parse tree
	 */
	enterJson_map?: (ctx: Json_mapContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_map`.
	 * @param ctx the parse tree
	 */
	exitJson_map?: (ctx: Json_mapContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_seq`.
	 * @param ctx the parse tree
	 */
	enterJson_seq?: (ctx: Json_seqContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_seq`.
	 * @param ctx the parse tree
	 */
	exitJson_seq?: (ctx: Json_seqContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_user_type`.
	 * @param ctx the parse tree
	 */
	enterJson_user_type?: (ctx: Json_user_typeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_user_type`.
	 * @param ctx the parse tree
	 */
	exitJson_user_type?: (ctx: Json_user_typeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_value`.
	 * @param ctx the parse tree
	 */
	enterJson_value?: (ctx: Json_valueContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_value`.
	 * @param ctx the parse tree
	 */
	exitJson_value?: (ctx: Json_valueContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.pair_key`.
	 * @param ctx the parse tree
	 */
	enterPair_key?: (ctx: Pair_keyContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.pair_key`.
	 * @param ctx the parse tree
	 */
	exitPair_key?: (ctx: Pair_keyContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.json_pair`.
	 * @param ctx the parse tree
	 */
	enterJson_pair?: (ctx: Json_pairContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.json_pair`.
	 * @param ctx the parse tree
	 */
	exitJson_pair?: (ctx: Json_pairContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_collection`.
	 * @param ctx the parse tree
	 */
	enterYaml_collection?: (ctx: Yaml_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_collection`.
	 * @param ctx the parse tree
	 */
	exitYaml_collection?: (ctx: Yaml_collectionContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_map`.
	 * @param ctx the parse tree
	 */
	enterYaml_map?: (ctx: Yaml_mapContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_map`.
	 * @param ctx the parse tree
	 */
	exitYaml_map?: (ctx: Yaml_mapContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_seq`.
	 * @param ctx the parse tree
	 */
	enterYaml_seq?: (ctx: Yaml_seqContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_seq`.
	 * @param ctx the parse tree
	 */
	exitYaml_seq?: (ctx: Yaml_seqContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.seq_item`.
	 * @param ctx the parse tree
	 */
	enterSeq_item?: (ctx: Seq_itemContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.seq_item`.
	 * @param ctx the parse tree
	 */
	exitSeq_item?: (ctx: Seq_itemContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_value`.
	 * @param ctx the parse tree
	 */
	enterYaml_value?: (ctx: Yaml_valueContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_value`.
	 * @param ctx the parse tree
	 */
	exitYaml_value?: (ctx: Yaml_valueContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.yaml_user_type`.
	 * @param ctx the parse tree
	 */
	enterYaml_user_type?: (ctx: Yaml_user_typeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.yaml_user_type`.
	 * @param ctx the parse tree
	 */
	exitYaml_user_type?: (ctx: Yaml_user_typeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.presentation_properties`.
	 * @param ctx the parse tree
	 */
	enterPresentation_properties?: (ctx: Presentation_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.presentation_properties`.
	 * @param ctx the parse tree
	 */
	exitPresentation_properties?: (ctx: Presentation_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.presentation_property`.
	 * @param ctx the parse tree
	 */
	enterPresentation_property?: (ctx: Presentation_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.presentation_property`.
	 * @param ctx the parse tree
	 */
	exitPresentation_property?: (ctx: Presentation_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.optional`.
	 * @param ctx the parse tree
	 */
	enterOptional?: (ctx: OptionalContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.optional`.
	 * @param ctx the parse tree
	 */
	exitOptional?: (ctx: OptionalContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.types_properties`.
	 * @param ctx the parse tree
	 */
	enterTypes_properties?: (ctx: Types_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.types_properties`.
	 * @param ctx the parse tree
	 */
	exitTypes_properties?: (ctx: Types_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.types_propertie`.
	 * @param ctx the parse tree
	 */
	enterTypes_propertie?: (ctx: Types_propertieContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.types_propertie`.
	 * @param ctx the parse tree
	 */
	exitTypes_propertie?: (ctx: Types_propertieContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_presentation`.
	 * @param ctx the parse tree
	 */
	enterNumber_presentation?: (ctx: Number_presentationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_presentation`.
	 * @param ctx the parse tree
	 */
	exitNumber_presentation?: (ctx: Number_presentationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_presentation_properties`.
	 * @param ctx the parse tree
	 */
	enterNumber_presentation_properties?: (ctx: Number_presentation_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_presentation_properties`.
	 * @param ctx the parse tree
	 */
	exitNumber_presentation_properties?: (ctx: Number_presentation_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_presentation_propertie`.
	 * @param ctx the parse tree
	 */
	enterNumber_presentation_propertie?: (ctx: Number_presentation_propertieContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_presentation_propertie`.
	 * @param ctx the parse tree
	 */
	exitNumber_presentation_propertie?: (ctx: Number_presentation_propertieContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.schema`.
	 * @param ctx the parse tree
	 */
	enterSchema?: (ctx: SchemaContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.schema`.
	 * @param ctx the parse tree
	 */
	exitSchema?: (ctx: SchemaContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.schema_presentations`.
	 * @param ctx the parse tree
	 */
	enterSchema_presentations?: (ctx: Schema_presentationsContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.schema_presentations`.
	 * @param ctx the parse tree
	 */
	exitSchema_presentations?: (ctx: Schema_presentationsContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.schema_presentation`.
	 * @param ctx the parse tree
	 */
	enterSchema_presentation?: (ctx: Schema_presentationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.schema_presentation`.
	 * @param ctx the parse tree
	 */
	exitSchema_presentation?: (ctx: Schema_presentationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.schema_name`.
	 * @param ctx the parse tree
	 */
	enterSchema_name?: (ctx: Schema_nameContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.schema_name`.
	 * @param ctx the parse tree
	 */
	exitSchema_name?: (ctx: Schema_nameContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.schema_uuid`.
	 * @param ctx the parse tree
	 */
	enterSchema_uuid?: (ctx: Schema_uuidContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.schema_uuid`.
	 * @param ctx the parse tree
	 */
	exitSchema_uuid?: (ctx: Schema_uuidContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.validation_properties`.
	 * @param ctx the parse tree
	 */
	enterValidation_properties?: (ctx: Validation_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.validation_properties`.
	 * @param ctx the parse tree
	 */
	exitValidation_properties?: (ctx: Validation_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_validation`.
	 * @param ctx the parse tree
	 */
	enterString_validation?: (ctx: String_validationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_validation`.
	 * @param ctx the parse tree
	 */
	exitString_validation?: (ctx: String_validationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_properties`.
	 * @param ctx the parse tree
	 */
	enterString_properties?: (ctx: String_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_properties`.
	 * @param ctx the parse tree
	 */
	exitString_properties?: (ctx: String_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_property`.
	 * @param ctx the parse tree
	 */
	enterString_property?: (ctx: String_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_property`.
	 * @param ctx the parse tree
	 */
	exitString_property?: (ctx: String_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_max`.
	 * @param ctx the parse tree
	 */
	enterString_max?: (ctx: String_maxContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_max`.
	 * @param ctx the parse tree
	 */
	exitString_max?: (ctx: String_maxContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_min`.
	 * @param ctx the parse tree
	 */
	enterString_min?: (ctx: String_minContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_min`.
	 * @param ctx the parse tree
	 */
	exitString_min?: (ctx: String_minContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.url_validation`.
	 * @param ctx the parse tree
	 */
	enterUrl_validation?: (ctx: Url_validationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.url_validation`.
	 * @param ctx the parse tree
	 */
	exitUrl_validation?: (ctx: Url_validationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.boolean_validation`.
	 * @param ctx the parse tree
	 */
	enterBoolean_validation?: (ctx: Boolean_validationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.boolean_validation`.
	 * @param ctx the parse tree
	 */
	exitBoolean_validation?: (ctx: Boolean_validationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_validation`.
	 * @param ctx the parse tree
	 */
	enterNumber_validation?: (ctx: Number_validationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_validation`.
	 * @param ctx the parse tree
	 */
	exitNumber_validation?: (ctx: Number_validationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_properties`.
	 * @param ctx the parse tree
	 */
	enterNumber_properties?: (ctx: Number_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_properties`.
	 * @param ctx the parse tree
	 */
	exitNumber_properties?: (ctx: Number_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_property`.
	 * @param ctx the parse tree
	 */
	enterNumber_property?: (ctx: Number_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_property`.
	 * @param ctx the parse tree
	 */
	exitNumber_property?: (ctx: Number_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_max`.
	 * @param ctx the parse tree
	 */
	enterNumber_max?: (ctx: Number_maxContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_max`.
	 * @param ctx the parse tree
	 */
	exitNumber_max?: (ctx: Number_maxContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_min`.
	 * @param ctx the parse tree
	 */
	enterNumber_min?: (ctx: Number_minContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_min`.
	 * @param ctx the parse tree
	 */
	exitNumber_min?: (ctx: Number_minContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_validation_type`.
	 * @param ctx the parse tree
	 */
	enterNumber_validation_type?: (ctx: Number_validation_typeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_validation_type`.
	 * @param ctx the parse tree
	 */
	exitNumber_validation_type?: (ctx: Number_validation_typeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.quantity_validation`.
	 * @param ctx the parse tree
	 */
	enterQuantity_validation?: (ctx: Quantity_validationContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.quantity_validation`.
	 * @param ctx the parse tree
	 */
	exitQuantity_validation?: (ctx: Quantity_validationContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.quantity_validation_types`.
	 * @param ctx the parse tree
	 */
	enterQuantity_validation_types?: (ctx: Quantity_validation_typesContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.quantity_validation_types`.
	 * @param ctx the parse tree
	 */
	exitQuantity_validation_types?: (ctx: Quantity_validation_typesContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.scalar`.
	 * @param ctx the parse tree
	 */
	enterScalar?: (ctx: ScalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.scalar`.
	 * @param ctx the parse tree
	 */
	exitScalar?: (ctx: ScalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.quantity_scalar`.
	 * @param ctx the parse tree
	 */
	enterQuantity_scalar?: (ctx: Quantity_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.quantity_scalar`.
	 * @param ctx the parse tree
	 */
	exitQuantity_scalar?: (ctx: Quantity_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.numeric_scalar`.
	 * @param ctx the parse tree
	 */
	enterNumeric_scalar?: (ctx: Numeric_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.numeric_scalar`.
	 * @param ctx the parse tree
	 */
	exitNumeric_scalar?: (ctx: Numeric_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.coercible_numeric_scalar`.
	 * @param ctx the parse tree
	 */
	enterCoercible_numeric_scalar?: (ctx: Coercible_numeric_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.coercible_numeric_scalar`.
	 * @param ctx the parse tree
	 */
	exitCoercible_numeric_scalar?: (ctx: Coercible_numeric_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string_scalar`.
	 * @param ctx the parse tree
	 */
	enterString_scalar?: (ctx: String_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string_scalar`.
	 * @param ctx the parse tree
	 */
	exitString_scalar?: (ctx: String_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.boolean_scalar`.
	 * @param ctx the parse tree
	 */
	enterBoolean_scalar?: (ctx: Boolean_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.boolean_scalar`.
	 * @param ctx the parse tree
	 */
	exitBoolean_scalar?: (ctx: Boolean_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.quantity`.
	 * @param ctx the parse tree
	 */
	enterQuantity?: (ctx: QuantityContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.quantity`.
	 * @param ctx the parse tree
	 */
	exitQuantity?: (ctx: QuantityContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.length`.
	 * @param ctx the parse tree
	 */
	enterLength?: (ctx: LengthContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.length`.
	 * @param ctx the parse tree
	 */
	exitLength?: (ctx: LengthContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.mass`.
	 * @param ctx the parse tree
	 */
	enterMass?: (ctx: MassContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.mass`.
	 * @param ctx the parse tree
	 */
	exitMass?: (ctx: MassContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.temperature`.
	 * @param ctx the parse tree
	 */
	enterTemperature?: (ctx: TemperatureContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.temperature`.
	 * @param ctx the parse tree
	 */
	exitTemperature?: (ctx: TemperatureContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number_type`.
	 * @param ctx the parse tree
	 */
	enterNumber_type?: (ctx: Number_typeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number_type`.
	 * @param ctx the parse tree
	 */
	exitNumber_type?: (ctx: Number_typeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.true`.
	 * @param ctx the parse tree
	 */
	enterTrue?: (ctx: TrueContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.true`.
	 * @param ctx the parse tree
	 */
	exitTrue?: (ctx: TrueContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.false`.
	 * @param ctx the parse tree
	 */
	enterFalse?: (ctx: FalseContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.false`.
	 * @param ctx the parse tree
	 */
	exitFalse?: (ctx: FalseContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.null`.
	 * @param ctx the parse tree
	 */
	enterNull?: (ctx: NullContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.null`.
	 * @param ctx the parse tree
	 */
	exitNull?: (ctx: NullContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.custom_type`.
	 * @param ctx the parse tree
	 */
	enterCustom_type?: (ctx: Custom_typeContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.custom_type`.
	 * @param ctx the parse tree
	 */
	exitCustom_type?: (ctx: Custom_typeContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `UONParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `UONParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;
}

