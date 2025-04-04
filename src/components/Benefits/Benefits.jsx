import { BenefitsContainer, CollageContainer, CommentItemBen, Item, TitleAddItemBen, TitleItemBen } from "./BenefitsCompStyle";

const Benefits = () => {
  return (
    <BenefitsContainer>
       <CollageContainer>
            {/* Перший рядок */}
            <Item width={459} height={245} >
                <TitleItemBen>10+ years</TitleItemBen>
                <TitleAddItemBen>Experience of Our Mechanics</TitleAddItemBen>
                <CommentItemBen>A qualified team of professionals with years of expertise in car repair and maintenance</CommentItemBen>
            </Item>
            <Item width={355} height={245} ><TitleItemBen>3 months</TitleItemBen>
                <TitleAddItemBen>Service Guarantee</TitleAddItemBen>
                <CommentItemBen>Your peace of mind is our priority: a 3-month warranty on all services and repairs</CommentItemBen></Item>
            {/* Другий рядок */}
            <Item width={355} height={245} ><TitleItemBen>RDW</TitleItemBen>
                <TitleAddItemBen>Official Recognition</TitleAddItemBen>
                <CommentItemBen>RDW certification ensures the quality and legality of all our work</CommentItemBen></Item>
            <Item width={459} height={245} ><TitleItemBen>4 languages</TitleItemBen>
                <TitleAddItemBen>UA | RU | EN | DE</TitleAddItemBen>
                <CommentItemBen>We serve clients in four languages for your convenience</CommentItemBen></Item>
        </CollageContainer>
    </BenefitsContainer>
  );
}

export default Benefits;