// Generated from TomParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { DocumentationContext } from './TomParser';
import { BodyContext } from './TomParser';
import { WhitespaceContext } from './TomParser';
import { AnnotationsContext } from './TomParser';
import { TagContext } from './TomParser';
import { TagNameContext } from './TomParser';
import { TagIDContext } from './TomParser';
import { OptionalTagIDContext } from './TomParser';
import { PropertyTagIDContext } from './TomParser';
import { OptionalTagOrIdentifierContext } from './TomParser';
import { TypeContext } from './TomParser';
import { UnaryTypeContext } from './TomParser';
import { TupleTypeContext } from './TomParser';
import { TupleTypeListContext } from './TomParser';
import { PrimaryTypeContext } from './TomParser';
import { IdentifierOrKeywordContext } from './TomParser';
import { ParenthesizedTypeContext } from './TomParser';
import { LambdaTypeContext } from './TomParser';
import { FormalParameterSequenceContext } from './TomParser';
import { ParameterContext } from './TomParser';
import { ArrayTypeContext } from './TomParser';
import { ObjectTypeContext } from './TomParser';
import { ObjectPairTypeListContext } from './TomParser';
import { ObjectPairTypeContext } from './TomParser';
import { OptionalTypeContext } from './TomParser';
import { PropertyTypeContext } from './TomParser';
import { OptionalTypeOrIdentiferContext } from './TomParser';
import { ValueContext } from './TomParser';
import { ExpressionContext } from './TomParser';
import { UnaryExpressionContext } from './TomParser';
import { ArrayExpressionContext } from './TomParser';
import { ObjectExpressionContext } from './TomParser';
import { ObjectPairExpressionListContext } from './TomParser';
import { ObjectPairExpressionContext } from './TomParser';
import { LambdaExpressionContext } from './TomParser';
import { LiteralContext } from './TomParser';
import { ParenthesizedExpressionContext } from './TomParser';
import { DescriptionContext } from './TomParser';
import { DescriptionLineContext } from './TomParser';
import { DescriptionLineStartContext } from './TomParser';
import { DescriptionTextContext } from './TomParser';
import { DescriptionLineElementContext } from './TomParser';
import { DescriptionLineTextContext } from './TomParser';
import { InlineTagContext } from './TomParser';
import { InlineTagNameContext } from './TomParser';
import { InlineTagBodyContext } from './TomParser';
import { BraceExpressionContext } from './TomParser';
import { BraceBodyContext } from './TomParser';
import { BraceTextContext } from './TomParser';
import { IdentifierContext } from './TomParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TomParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TomParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TomParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.whitespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhitespace?: (ctx: WhitespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.tagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagName?: (ctx: TagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.tagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagID?: (ctx: TagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.optionalTagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTagID?: (ctx: OptionalTagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.propertyTagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyTagID?: (ctx: PropertyTagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.unaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryType?: (ctx: UnaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.tupleTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeList?: (ctx: TupleTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryType?: (ctx: PrimaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.parenthesizedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.lambdaType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaType?: (ctx: LambdaTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectPairType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairType?: (ctx: ObjectPairTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.optionalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalType?: (ctx: OptionalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.propertyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyType?: (ctx: PropertyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.arrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectExpression?: (ctx: ObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.objectPairExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.descriptionLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLine?: (ctx: DescriptionLineContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.descriptionText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionText?: (ctx: DescriptionTextContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.descriptionLineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineText?: (ctx: DescriptionLineTextContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.inlineTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTag?: (ctx: InlineTagContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.inlineTagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagName?: (ctx: InlineTagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.inlineTagBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagBody?: (ctx: InlineTagBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.braceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceExpression?: (ctx: BraceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.braceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceBody?: (ctx: BraceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.braceText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceText?: (ctx: BraceTextContext) => Result;

	/**
	 * Visit a parse tree produced by `TomParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

