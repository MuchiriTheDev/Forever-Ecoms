import refrigerator_Guard from './product.png'
import big_stepler from './big_stepler.jpeg'
import biro_pen_1 from './biro_pen_1.jpeg'
import biro_pen_2 from './biro_pen_2.jpeg'
import biro_pen_3 from './biro_pen_3.jpeg'
import biro_pen_4 from './biro_pen_4.jpeg'
import biro_pen_5 from './biro_pen_5.jpeg'
import casio_calculator from './casio_calculator.jpeg'
import colorings_1 from './colorings_1.jpeg'
import colorings_2 from './colorings_2.jpeg'
import paper_punch_1 from './paper_punch_1.jpeg'
import paper_punch_2 from './paper_punch_2.jpeg'
import paper_punch_3 from './paper_punch_3.jpeg'
import paper_punch_4 from './paper_punch_4.jpeg'
import pencil_1 from './pencil_1.jpeg'
import pencil_2 from './pencil_2.jpeg'
import pencil_3 from './pencil_3.jpeg'
import price_tag_1 from './price_tag_1.jpeg'
import price_tag_2 from './price_tag_2.jpeg'
import marker_pen_1 from './marker_pen_1.jpeg'
import marker_pen_2 from './marker_pen_2.jpeg'
import marker_pen_3 from './marker_pen_3.jpeg'
import gelx_1 from './gelx_1.jpeg'
import gelx_2 from './gelx_2.jpeg'
import gelx_3 from './gelx_3.jpeg'
import gelx_4 from './gelx_4.jpeg'
import hardcover_1 from './hardcover_1.jpeg'
import hardcover_2 from './hardcover_2.jpeg'
import hardcover_3 from './hardcover_3.jpeg'
import laserjet_1 from './laserjet_1.jpeg'
import laserjet_2 from './laserjet_2.jpeg'
import sticker_1 from './sticker_1.jpeg'
import sticker_2 from './sticker_2.jpeg'
import sticker_3 from './sticker_3.jpeg'
import sticker_4 from './sticker_4.jpeg'
import steples from './steples.jpeg'
import steppler from './steppler.jpeg'
import selotape from './selotape.jpeg'
import tri_color_cartridge_1 from './tri_color_cartridge_1.jpeg'
import tri_color_cartridge_2 from './tri_color_cartridge_2.jpeg'
import pixma from './pixma.jpeg'


import logo from './logo.png'
import hero_img from './hero.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import about_img from './about.png'
import cross_icon from './cross_icon.png'
import mpesa from './mpesa.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    mpesa
}

export const products = [
    {
        _id: "aaaaa",
        name: "Refrigerator Guard 5Amps",
        description: "The Refrigerator Guard protects your appliances by cutting power during unsafe voltage levels, preventing damage from high or low voltage.",
        price: 1096,
        image: [refrigerator_Guard],
        category: "Electronics",
        subCategory: "all",
        sizes: ["Compact", "Standard"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Big stapler",
        description: "A sleek, high-definition smart TV with 4K resolution, smart features for streaming, and enhanced picture quality.",
        price: 1200,
        image: [big_stepler],
        category: "Electronics",
        subCategory: "Home Entertainment",
        sizes: ["43 inch", "55 inch", "65 inch"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Biro pen",
        description: "A high-performance laptop with a 15.6-inch screen, ideal for work, school, and entertainment. Equipped with powerful specs.",
        price: 800,
        image: [biro_pen_1, biro_pen_2, biro_pen_3, biro_pen_4, biro_pen_5],
        category: "Electronics",
        subCategory: "Computing",
        sizes: ["15.6 inch"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Casio Calculator",
        description: "A comfortable and ergonomic wireless mouse and keyboard set, designed for long hours of work or gaming.",
        price: 45,
        image: [casio_calculator],
        category: "Electronics",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Paper Punch",
        description: "A reliable inkjet printer that produces high-quality prints and scans, ideal for office and home use.",
        price: 150,
        image: [paper_punch_1, paper_punch_2, paper_punch_3, paper_punch_4],
        category: "Electronics",
        subCategory: "Office Equipment",
        sizes: ["A4", "A3"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Marker pen",
        description: "A complete set of office stationery including pens, notebooks, paper clips, and more, for a fully stocked desk.",
        price: 25,
        image: [marker_pen_1, marker_pen_2, marker_pen_3],
        category: "Stationery",
        subCategory: "Office Supplies",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Pencil",
        description: "High-quality, smooth A4 printer paper, perfect for printing documents, presentations, and more.",
        price: 10,
        image: [pencil_1, pencil_2, pencil_3],
        category: "Stationery",
        subCategory: "Paper Products",
        sizes: ["A4"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Price tags",
        description: "A stylish and functional office desk organizer to keep your pens, notebooks, and other stationery items neatly arranged.",
        price: 30,
        image: [price_tag_1, price_tag_2],
        category: "Stationery",
        subCategory: "Office Supplies",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Colorings",
        description: "Over-ear headphones with advanced noise-canceling technology, perfect for studying, working, or traveling.",
        price: 200,
        image: [colorings_1, colorings_2],
        category: "Electronics",
        subCategory: "Audio",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "GexL",
        description: "A fast-boiling electric kettle made from stainless steel, designed to quickly heat water for your beverages.",
        price: 500,
        image: [gelx_1, gelx_2, gelx_3, gelx_4 ],
        category: "Electronics",
        subCategory: "Kitchen Appliances",
        sizes: ["1.5L", "2L"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "Hardcover Books",
        description: "An adjustable LED desk lamp with multiple brightness levels and a modern design, perfect for working or reading.",
        price: 35,
        image: [hardcover_1, hardcover_2, hardcover_3],
        category: "Electronics",
        subCategory: "Lighting",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaal",
        name: "Laser Jet",
        description: "A high-capacity power bank with 20,000mAh, perfect for charging your devices on the go.",
        price: 60,
        image: [laserjet_1, laserjet_2],
        category: "Electronics",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Selotape",
        description: "Compact and lightweight wireless earbuds with excellent sound quality and noise isolation.",
        price: 80,
        image: [selotape],
        category: "Electronics",
        subCategory: "Audio",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Steples",
        description: "A high-speed USB flash drive with 128GB of storage, perfect for transferring and storing files.",
        price: 25,
        image: [steples],
        category: "Electronics",
        subCategory: "Storage Devices",
        sizes: ["128GB"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaao",
        name: "Steppler",
        description: "A 16-inch electric fan with multiple speed settings, perfect for cooling down during hot weather.",
        price: 40,
        image: [steppler],
        category: "Electronics",
        subCategory: "Home Appliances",
        sizes: ["16-inch"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaap",
        name: "Sticikers",
        description: "A sleek wireless charging pad for fast charging of your smartphone, free from tangled cords.",
        price: 30,
        image: [sticker_1, sticker_2, sticker_3, sticker_4],
        category: "Electronics",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaq",
        name: "Pixma",
        description: "A high-quality notebook with 200 pages, perfect for journaling, note-taking, or sketching.",
        price: 10,
        image: [pixma],
        category: "Stationery",
        subCategory: "Paper Products",
        sizes: ["A5"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaar",
        name: "Sellotape",
        description: "A set of 5 smooth-writing ballpoint pens with black ink, perfect for daily writing tasks.",
        price: 5,
        image: [selotape],
        category: "Stationery",
        subCategory: "Writing Instruments",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaas",
        name: "Tri color cartridge",
        description: "A heavy-duty stapler designed for high-volume stapling, perfect for office use.",
        price: 15,
        image: [tri_color_cartridge_1, tri_color_cartridge_2],
        category: "Stationery",
        subCategory: "Office Supplies",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
]
    // {
    //     _id: "aaaat",
    //     name: "Shredder – Paper",
    //     description: "A compact paper shredder that safely destroys documents, ideal for home or office use.",
    //     price: 50,
    //     image: [p_img20],
    //     category: "Stationery",
    //     subCategory: "Office Supplies",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaau",
    //     name: "Desk Chair – Ergonomic",
    //     description: "An ergonomic desk chair designed for comfort and support, ideal for long working hours.",
    //     price: 100,
    //     image: [p_img21],
    //     category: "Stationery",
    //     subCategory: "Office Furniture",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaav",
    //     name: "Wall Clock – Modern Design",
    //     description: "A stylish wall clock with a modern design, perfect for adding elegance to your office or home.",
    //     price: 20,
    //     image: [p_img22],
    //     category: "Stationery",
    //     subCategory: "Office Décor",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaaw",
    //     name: "Smart Watch",
    //     description: "A feature-packed smartwatch that tracks your fitness, heart rate, and notifications directly on your wrist.",
    //     price: 150,
    //     image: [p_img23],
    //     category: "Electronics",
    //     subCategory: "Wearables",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaax",
    //     name: "Compact Digital Camera",
    //     description: "A high-resolution digital camera, perfect for capturing photos and videos on the go.",
    //     price: 350,
    //     image: [p_img24],
    //     category: "Electronics",
    //     subCategory: "Cameras",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaay",
    //     name: "Smartphone – 128GB",
    //     description: "A sleek smartphone with 128GB storage, perfect for all your apps, photos, and videos.",
    //     price: 500,
    //     image: [p_img25],
    //     category: "Electronics",
    //     subCategory: "Mobile Phones",
    //     sizes: ["128GB"],
    //     date: 1716622345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaaz",
    //     name: "Desk Lamp – Touch Control",
    //     description: "A sleek desk lamp with touch control and adjustable brightness, ideal for late-night work or reading.",
    //     price: 35,
    //     image: [p_img26],
    //     category: "Electronics",
    //     subCategory: "Lighting",
    //     sizes: ["Standard"],
    //     date: 1716622345448,
    //     bestseller: true
    // },

    // {
    //     _id: "aaaaf",
    //     name: "Kids Bluetooth Headphones",
    //     description: "Wireless Bluetooth headphones designed for kids, featuring adjustable headbands, volume-limiting technology, and vibrant colors.",
    //     price: 140,
    //     image: [p_img6],
    //     category: "Electronics",
    //     subCategory: "Headphones",
    //     sizes: ["One Size"],
    //     date: 1716623423448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaag",
    //     name: "Men Smartwatch with Fitness Tracker",
    //     description: "A sleek, stylish smartwatch with fitness tracking features, heart rate monitoring, and smartphone notifications.",
    //     price: 190,
    //     image: [p_img7],
    //     category: "Electronics",
    //     subCategory: "Wearables",
    //     sizes: ["One Size"],
    //     date: 1716621542448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaah",
    //     name: "Men Bluetooth Wireless Earbuds",
    //     description: "Compact and high-quality Bluetooth wireless earbuds, offering crystal clear sound and a comfortable fit for everyday use.",
    //     price: 140,
    //     image: [p_img8],
    //     category: "Electronics",
    //     subCategory: "Earbuds",
    //     sizes: ["One Size"],
    //     date: 1716622345448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaai",
    //     name: "Kids Tablet for Learning",
    //     description: "A kid-friendly tablet with parental controls, pre-installed educational apps, and durable casing for safe learning experiences.",
    //     price: 100,
    //     image: [p_img9],
    //     category: "Electronics",
    //     subCategory: "Tablets",
    //     sizes: ["One Size"],
    //     date: 1716621235448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaaj",
    //     name: "Men Wireless Charging Pad",
    //     description: "A sleek wireless charging pad for smartphones and other devices, designed for fast charging and convenience.",
    //     price: 110,
    //     image: [p_img10],
    //     category: "Electronics",
    //     subCategory: "Chargers",
    //     sizes: ["One Size"],
    //     date: 1716622235448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaak",
    //     name: "Men Noise Cancelling Headphones",
    //     description: "Over-ear noise-cancelling headphones, ideal for travel and work, offering superior sound quality and noise reduction.",
    //     price: 120,
    //     image: [p_img11],
    //     category: "Electronics",
    //     subCategory: "Headphones",
    //     sizes: ["One Size"],
    //     date: 1716623345448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaal",
    //     name: "Men Smart LED Desk Lamp",
    //     description: "A modern desk lamp with adjustable brightness, color temperature, and a USB charging port, perfect for any workspace.",
    //     price: 150,
    //     image: [p_img12],
    //     category: "Electronics",
    //     subCategory: "Home Office",
    //     sizes: ["One Size"],
    //     date: 1716624445448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaam",
    //     name: "Women Wireless Bluetooth Speaker",
    //     description: "Portable Bluetooth speaker with powerful sound, water-resistant design, and a long battery life for on-the-go listening.",
    //     price: 130,
    //     image: [p_img13],
    //     category: "Electronics",
    //     subCategory: "Speakers",
    //     sizes: ["One Size"],
    //     date: 1716625545448,
    //     bestseller: false
    // },
    // {
    //     _id: "aaaan",
    //     name: "Boy Interactive Drawing Tablet",
    //     description: "A fun and educational drawing tablet for boys, offering a pressure-sensitive screen and creative drawing tools for artistic exploration.",
    //     price: 160,
    //     image: [p_img14],
    //     category: "Electronics",
    //     subCategory: "Tablets",
    //     sizes: ["One Size"],
    //     date: 1716626645448,
    //     bestseller: false
    // },
// ]
//  {
//         _id: "aaaao",
//         name: "Men Tapered Fit Flat-Front Trousers",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 140,
//         image: [p_img15],
//         category: "Men",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716627745448,
//         bestseller: false
//     },
//     {
//         _id: "aaaap",
//         name: "Girls Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 170,
//         image: [p_img16],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716628845448,
//         bestseller: false
//     },
//     {
//         _id: "aaaaq",
//         name: "Men Tapered Fit Flat-Front Trousers",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 150,
//         image: [p_img17],
//         category: "Men",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716629945448,
//         bestseller: false
//     },
//     {
//         _id: "aaaar",
//         name: "Boy Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 180,
//         image: [p_img18],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716631045448,
//         bestseller: false
//     },
//     {
//         _id: "aaaas",
//         name: "Boy Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 160,
//         image: [p_img19],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716632145448,
//         bestseller: false
//     },
//     {
//         _id: "aaaat",
//         name: "Women Palazzo Pants with Waist Belt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 190,
//         image: [p_img20],
//         category: "Women",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716633245448,
//         bestseller: false
//     },
//     {
//         _id: "aaaau",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 170,
//         image: [p_img21],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716634345448,
//         bestseller: false
//     },
//     {
//         _id: "aaaav",
//         name: "Women Palazzo Pants with Waist Belt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 200,
//         image: [p_img22],
//         category: "Women",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716635445448,
//         bestseller: false
//     },
//     {
//         _id: "aaaaw",
//         name: "Boy Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 180,
//         image: [p_img23],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716636545448,
//         bestseller: false
//     },
//     {
//         _id: "aaaax",
//         name: "Boy Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 210,
//         image: [p_img24],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716637645448,
//         bestseller: false
//     },
//     {
//         _id: "aaaay",
//         name: "Girls Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 190,
//         image: [p_img25],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716638745448,
//         bestseller: false
//     },
//     {
//         _id: "aaaaz",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 220,
//         image: [p_img26],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716639845448,
//         bestseller: false
//     },
//     {
//         _id: "aaaba",
//         name: "Girls Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 200,
//         image: [p_img27],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716640945448,
//         bestseller: false
//     },
//     {
//         _id: "aaabb",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 230,
//         image: [p_img28],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716642045448,
//         bestseller: false
//     },
//     {
//         _id: "aaabc",
//         name: "Women Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 210,
//         image: [p_img29],
//         category: "Women",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716643145448,
//         bestseller: false
//     },
//     {
//         _id: "aaabd",
//         name: "Girls Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 240,
//         image: [p_img30],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716644245448,
//         bestseller: false
//     },
//     {
//         _id: "aaabe",
//         name: "Men Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 220,
//         image: [p_img31],
//         category: "Men",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716645345448,
//         bestseller: false
//     },
//     {
//         _id: "aaabf",
//         name: "Men Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 250,
//         image: [p_img32],
//         category: "Men",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716646445448,
//         bestseller: false
//     },
//     {
//         _id: "aaabg",
//         name: "Girls Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 230,
//         image: [p_img33],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716647545448,
//         bestseller: false
//     },
//     {
//         _id: "aaabh",
//         name: "Women Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 260,
//         image: [p_img34],
//         category: "Women",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716648645448,
//         bestseller: false
//     },
//     {
//         _id: "aaabi",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 240,
//         image: [p_img35],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716649745448,
//         bestseller: false
//     },
//     {
//         _id: "aaabj",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 270,
//         image: [p_img36],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716650845448,
//         bestseller: false
//     },
//     {
//         _id: "aaabk",
//         name: "Women Round Neck Cotton Top",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 250,
//         image: [p_img37],
//         category: "Women",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716651945448,
//         bestseller: false
//     },
//     {
//         _id: "aaabl",
//         name: "Men Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 280,
//         image: [p_img38],
//         category: "Men",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716653045448,
//         bestseller: false
//     },
//     {
//         _id: "aaabm",
//         name: "Men Printed Plain Cotton Shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 260,
//         image: [p_img39],
//         category: "Men",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716654145448,
//         bestseller: false
//     },
//     {
//         _id: "aaabn",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 290,
//         image: [p_img40],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716655245448,
//         bestseller: false
//     },
//     {
//         _id: "aaabo",
//         name: "Men Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 270,
//         image: [p_img41],
//         category: "Men",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716656345448,
//         bestseller: false
//     },
//     {
//         _id: "aaabp",
//         name: "Boy Round Neck Pure Cotton T-shirt",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 300,
//         image: [p_img42],
//         category: "Kids",
//         subCategory: "Topwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716657445448,
//         bestseller: false
//     },
//     {
//         _id: "aaabq",
//         name: "Kid Tapered Slim Fit Trouser",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 280,
//         image: [p_img43],
//         category: "Kids",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716658545448,
//         bestseller: false
//     },
//     {
//         _id: "aaabr",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 310,
//         image: [p_img44],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716659645448,
//         bestseller: false
//     },
//     {
//         _id: "aaabs",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 290,
//         image: [p_img45],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716660745448,
//         bestseller: false
//     },
//     {
//         _id: "aaabt",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 320,
//         image: [p_img46],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716661845448,
//         bestseller: false
//     },
//     {
//         _id: "aaabu",
//         name: "Kid Tapered Slim Fit Trouser",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 300,
//         image: [p_img47],
//         category: "Kids",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716662945448,
//         bestseller: false
//     },
//     {
//         _id: "aaabv",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 330,
//         image: [p_img48],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716664045448,
//         bestseller: false
//     },
//     {
//         _id: "aaabw",
//         name: "Kid Tapered Slim Fit Trouser",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 310,
//         image: [p_img49],
//         category: "Kids",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716665145448,
//         bestseller: false
//     },
//     {
//         _id: "aaabx",
//         name: "Kid Tapered Slim Fit Trouser",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 340,
//         image: [p_img50],
//         category: "Kids",
//         subCategory: "Bottomwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716666245448, bestseller: false
//     },
//     {
//         _id: "aaaby",
//         name: "Women Zip-Front Relaxed Fit Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 320,
//         image: [p_img51],
//         category: "Women",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716667345448,
//         bestseller: false
//     },
//     {
//         _id: "aaabz",
//         name: "Men Slim Fit Relaxed Denim Jacket",
//         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//         price: 350,
//         image: [p_img52],
//         category: "Men",
//         subCategory: "Winterwear",
//         sizes: ["S", "M", "L", "XL"],
//         date: 1716668445448,
//         bestseller: false
//     }

// ]