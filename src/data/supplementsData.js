import creatine from "../assets/Creatine_Biotech_Usa.webp";
import whey from "../assets/whey-protein.webp";
import amino from "../assets/amino-acid.webp";
import glutamine from "../assets/glutamine.webp";
import c4 from "../assets/c4.webp";
import pp from "../assets/protein-powder.webp";
import multi from "../assets/multi-vitamin.webp";
import gold from "../assets/gold-creatine.webp";
import carbox from "../assets/carbox.webp";
import amin from "../assets/amin.webp";


const supplements = [
    {
        id: 1,
        name: "Creatine Monohydrate",
        description: "A popular sports nutrition supplement used to support strength and high-intensity exercise performance.",
        price: 30 ,
        image : creatine

    },
    {
        id: 2,
        name: "Whey Protein",
        description: "A protein supplement used to help meet daily protein needs.",
        price: 45 ,
        image : whey
    },
    {
        id: 3,
        name: "Carbox",
        description: "A calorie-dense powder containing carbohydrates and protein.",
        price: 50 ,
        image : carbox
    },
    {
        id: 4,
        name: "BCAA Amino Acids",
        description: "A supplement containing three branched-chain amino acids: leucine, isoleucine, and valine.",
        price: 35 ,
        image : amino

    },
    {
        id: 5,
        name: "EAA Amino Acids",
        description: "A supplement containing essential amino acids that the body cannot produce on its own.",
        price: 38 ,
        image : amin
    },
    {
        id: 6,
        name: "Glutamine",
        description: "An amino acid commonly included in sports nutrition products.",
        price: 28 ,
        image : glutamine
    },
    {
        id: 7,
        name: "Protein powder",
        description: "Convenient powder containing protein.",
        price: 15 ,
        image : pp
    },
    {
        id: 8,
        name: "Pre-Workout Supplement",
        description: "A sports nutrition product formulated with ingredients intended to support workout alertness and performance.",
        price: 32 ,
        image : c4
    },
    {
        id: 9,
        name: "Gold-creatine",
        description: "A popular sports nutrition supplement used to support strength and high-intensity exercise performance.",
        price: 18 ,
        image : gold
    },
    {
        id: 10,
        name: "Multi-vitamin",
        description: "A vitamin supplement that supports normal bone and muscle function.",
        price: 18 ,
        image : multi
    }
];

export default supplements;