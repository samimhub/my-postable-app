
interface ProcessCard{
    id:number;
    img:string;   
    title:string;
    description:string;
}

export const processCard : ProcessCard[]=[
    {
        id:1,
        img:'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-1_grbgfh.webp',
        title:'Copy tweets link',
        description:'On X/Twitter, click the share icon at the bottom-right of the tweet and select Copy Link. Then, paste the link into the box above.'
    },
    {
        id:2,
        img:'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-2_n2egsf.webp',
        title:'Customize Design',
        description:'Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.'
    },
    {
        id:3,
        img:'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-3_d477fk.webp',
        title:'Export!',
        description:'Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format.'
    }
]
export const faqItems = [
    {
      question: "Is Postable free to use?",
      answer: "Yes, Postable offers a free tier with basic features. Premium features may require a subscription."
    },
    {
      question: "What social media platforms does this tool support?",
      answer: "Postable supports major platforms including Instagram, Facebook, Twitter, and LinkedIn."
    },
    {
      question: "Can I customize the created images?",
      answer: "Postable provides a range of customization options for your images."
    },
    {
      question: "Do I need design skills to use this platform?",
      answer: "No, Postable is designed to be user-friendly for all skill levels."
    },
    {
      question: "Do I need to know the format or size of each social media?",
      answer: "Not at all. Postable automatically adjusts your content to fit the requirements of each platform."
    }
  ]