import { config } from "@/lib/config";

export const sliderImages = [
    {
        prefixText: "Since 1998",
        image: config.images.heroImage.src,
        title: config.title,
        tagLine: "General Trading & Supply Contracting Company",
        description: "Qemat Al-Najah General Trading Company Limited is your trusted partner for a variety of business needs in Iraq. We offer a comprehensive range of products and services across three main divisions, ensuring we can meet your specific requirements",
        actions: {
            primary: {
                label: "Contact us",
                url: "#contact",
            },
            secondary: {
                label: "Read more",
                url: "#about",
            }
        }
    },
    {
        prefixText: "Supporting the displaced",
        image: config.images.unDisplaced.src,
        title: "We understand the dire needs of displaced people in Iraq.",
        tagLine: "emergency supplies to United Nations organizations",
        description: "It is the name behind many Iraq’s most advanced and prestigious facilities. The company was established in 1998. And it is headquartered in Baghdad. Over the years, the group has un-retaken many challenging projects and accumulated skills.",
        actions: {
            primary: {
                label: "Our Services",
                url: "#services",
            },
            secondary: {
                label: "Contact us",
                url: "#contact",
            },
        }
    },
    {
        prefixText: "A dedicated to provider",
        image: config.images.householdAppliances.src,
        title: "",
        tagLine: "We're a leading supplier of high-quality electronic materials and devices in Iraq.",
        actions: {
            primary: {
                label: "Contact us",
                url: "#contact",
            },
            secondary: {
                label: "Our Services",
                url: "#services",
            },
        }
    },
];