// Generated from UON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UonContext } from "./UONParser";
import { Json_collectionContext } from "./UONParser";
import { Json_mapContext } from "./UONParser";
import { Json_seqContext } from "./UONParser";
import { Yaml_collectionContext } from "./UONParser";
import { Yaml_mapContext } from "./UONParser";
import { Yaml_seqContext } from "./UONParser";
import { Seq_itemContext } from "./UONParser";
import { PairContext } from "./UONParser";
import { Pair_keyContext } from "./UONParser";
import { Json_pairContext } from "./UONParser";
import { Presentation_propertiesContext } from "./UONParser";
import { Presentation_propertyContext } from "./UONParser";
import { DescriptionContext } from "./UONParser";
import { OptionalContext } from "./UONParser";
import { StringContext } from "./UONParser";
import { Custom_typeContext } from "./UONParser";
import { Json_user_typeContext } from "./UONParser";
import { Yaml_user_typeContext } from "./UONParser";
import { ScalarContext } from "./UONParser";
import { String_scalarContext } from "./UONParser";
import { Boolean_scalarContext } from "./UONParser";
import { UrlContext } from "./UONParser";
import { Quantity_scalarContext } from "./UONParser";
import { Numeric_scalarContext } from "./UONParser";
import { Coercible_numeric_scalarContext } from "./UONParser";
import { QuantityContext } from "./UONParser";
import { LengthContext } from "./UONParser";
import { MassContext } from "./UONParser";
import { TimeContext } from "./UONParser";
import { TemperatureContext } from "./UONParser";
import { NumberContext } from "./UONParser";
import { Root_valueContext } from "./UONParser";
import { Json_valueContext } from "./UONParser";
import { Yaml_valueContext } from "./UONParser";
import { Number_typeContext } from "./UONParser";
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
import { BooleanContext } from "./UONParser";
import { TrueContext } from "./UONParser";
import { FalseContext } from "./UONParser";
import { NullContext } from "./UONParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UONParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UONVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UONParser.uon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUon?: (ctx: UonContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_collection?: (ctx: Json_collectionContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_map?: (ctx: Json_mapContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_seq?: (ctx: Json_seqContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.yaml_collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYaml_collection?: (ctx: Yaml_collectionContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.yaml_map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYaml_map?: (ctx: Yaml_mapContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.yaml_seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYaml_seq?: (ctx: Yaml_seqContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.seq_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeq_item?: (ctx: Seq_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.pair_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair_key?: (ctx: Pair_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_pair?: (ctx: Json_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.presentation_properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPresentation_properties?: (ctx: Presentation_propertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.presentation_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPresentation_property?: (ctx: Presentation_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.optional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional?: (ctx: OptionalContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.custom_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustom_type?: (ctx: Custom_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_user_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_user_type?: (ctx: Json_user_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.yaml_user_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYaml_user_type?: (ctx: Yaml_user_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar?: (ctx: ScalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_scalar?: (ctx: String_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.boolean_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_scalar?: (ctx: Boolean_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.quantity_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity_scalar?: (ctx: Quantity_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.numeric_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_scalar?: (ctx: Numeric_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.coercible_numeric_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoercible_numeric_scalar?: (ctx: Coercible_numeric_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.quantity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity?: (ctx: QuantityContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.length`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLength?: (ctx: LengthContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.mass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMass?: (ctx: MassContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.temperature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemperature?: (ctx: TemperatureContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.root_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot_value?: (ctx: Root_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.json_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson_value?: (ctx: Json_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.yaml_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYaml_value?: (ctx: Yaml_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_type?: (ctx: Number_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema?: (ctx: SchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.schema_presentations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_presentations?: (ctx: Schema_presentationsContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.schema_presentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_presentation?: (ctx: Schema_presentationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.schema_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_name?: (ctx: Schema_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.schema_uuid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_uuid?: (ctx: Schema_uuidContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.validation_properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidation_properties?: (ctx: Validation_propertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_validation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_validation?: (ctx: String_validationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_properties?: (ctx: String_propertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_property?: (ctx: String_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_max`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_max?: (ctx: String_maxContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.string_min`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_min?: (ctx: String_minContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.url_validation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl_validation?: (ctx: Url_validationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.boolean_validation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_validation?: (ctx: Boolean_validationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_validation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_validation?: (ctx: Number_validationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_properties?: (ctx: Number_propertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_property?: (ctx: Number_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_max`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_max?: (ctx: Number_maxContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_min`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_min?: (ctx: Number_minContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.number_validation_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_validation_type?: (ctx: Number_validation_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.quantity_validation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity_validation?: (ctx: Quantity_validationContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.quantity_validation_types`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity_validation_types?: (ctx: Quantity_validation_typesContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.true`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrue?: (ctx: TrueContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.false`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalse?: (ctx: FalseContext) => Result;

	/**
	 * Visit a parse tree produced by `UONParser.null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull?: (ctx: NullContext) => Result;
}

