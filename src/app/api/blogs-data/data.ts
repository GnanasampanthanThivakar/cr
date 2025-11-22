export interface Blog {
    id: number;
    title: string;
    date: string;
    image: string;
    summary: string;
    content: string;
    author: string;
}

export const blogs: Blog[] = [
    {
        id: 1,
        title: "The Ultimate Guide to Ceramic Coating",
        date: "November 20, 2025",
        image: "/images/blogs/ceramic-guide.png",
        summary: "Discover how ceramic coating can protect your vehicle's paint and keep it looking new for years.",
        content: `
      <p>Ceramic coating is a liquid polymer that is applied by hand to the exterior of a vehicle. The coating chemically bonds with the vehicle's factory paint, creating a layer of protection.</p>
      <h3>What Does It Do?</h3>
      <p>It creates a permanent or semi-permanent bond with a vehicle's paint, meaning that it does not wash away or break down and does not require repeated application every few months.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Protection from UV Damage / Oxidization</li>
        <li>Protection from Chemical Stains and Etching</li>
        <li>Ease of Cleaning</li>
        <li>Enhanced Gloss</li>
      </ul>
    `,
        author: "Crystal Shine Team",
    },
    {
        id: 2,
        title: "PPF vs. Ceramic Coating: Which is Right for You?",
        date: "November 15, 2025",
        image: "/images/blogs/ppf-vs-ceramic.png",
        summary: "Confused between Paint Protection Film and Ceramic Coating? We break down the differences to help you decide.",
        content: `
      <p>Both Paint Protection Film (PPF) and Ceramic Coatings are excellent ways to protect your car's paint, but they serve different purposes.</p>
      <h3>Paint Protection Film (PPF)</h3>
      <p>PPF is a thicker, transparent film that provides physical protection against rock chips, scratches, and abrasions.</p>
      <h3>Ceramic Coating</h3>
      <p>Ceramic Coating is a liquid layer that protects against chemical damage, UV rays, and makes the car easier to clean, but offers less physical protection against impact.</p>
      <h3>Conclusion</h3>
      <p>If you want protection from rock chips, go for PPF. If you want gloss and ease of cleaning, go for Ceramic Coating. For the ultimate protection, combine both!</p>
    `,
        author: "Crystal Shine Team",
    },
    {
        id: 3,
        title: "How to Maintain Your Car's Shine in Dubai Summer",
        date: "November 10, 2025",
        image: "/images/blogs/dubai-summer.png",
        summary: "Dubai's harsh summer can be tough on your car. Here are some tips to keep your vehicle looking its best.",
        content: `
      <p>The extreme heat and UV radiation in Dubai can cause your car's paint to fade and crack over time.</p>
      <h3>Tips for Summer Care</h3>
      <ul>
        <li><strong>Park in the Shade:</strong> Whenever possible, park under cover to reduce UV exposure.</li>
        <li><strong>Wash Regularly:</strong> Remove dust and sand that can scratch the paint.</li>
        <li><strong>Use a Sunshade:</strong> Protect your dashboard and interior from cracking.</li>
        <li><strong>Apply Protection:</strong> Wax, sealant, or ceramic coating provides a sacrificial layer against the sun.</li>
      </ul>
    `,
        author: "Crystal Shine Team",
    },
    {
        id: 4,
        title: "The Benefits of Paint Correction",
        date: "November 05, 2025",
        image: "/images/blogs/paint-correction.png",
        summary: "Restore your car's paint to showroom condition by removing swirl marks and scratches with paint correction.",
        content: `
      <p>Paint correction is the process of restoring and rejuvenating the paintwork of a vehicle, mostly through the elimination of surface imperfections.</p>
      <h3>What Can It Fix?</h3>
      <ul>
        <li>Swirl marks & fine scratches</li>
        <li>Bird dropping etching & acid rain etching</li>
        <li>Holograms & buffer trails</li>
        <li>Oxidation & fading</li>
      </ul>
      <p>The result is a true reflection and a deep, glossy finish.</p>
    `,
        author: "Crystal Shine Team",
    },
    {
        id: 5,
        title: "Interior Detailing: More Than Just a Vacuum",
        date: "October 28, 2025",
        image: "/images/blogs/interior-detailing.png",
        summary: "A clean interior is essential for a healthy driving environment. Learn what goes into a professional interior detail.",
        content: `
      <p>Professional interior detailing goes far beyond a simple vacuum and wipe down.</p>
      <h3>Our Process</h3>
      <p>We use steam cleaning, extraction, and specialized brushes to clean every vent, button, and crevice.</p>
      <h3>Leather Care</h3>
      <p>Leather seats are cleaned and conditioned to prevent cracking and keep them soft.</p>
      <h3>Sanitization</h3>
      <p>We ensure that bacteria and allergens are removed, making your car safe for you and your family.</p>
    `,
        author: "Crystal Shine Team",
    },
    {
        id: 6,
        title: "Why Window Tinting is Essential in UAE",
        date: "October 20, 2025",
        image: "/images/blogs/window-tinting.png",
        summary: "Protect yourself and your car's interior from the sun with high-quality window tinting.",
        content: `
      <p>Window tinting is almost a necessity in the UAE climate.</p>
      <h3>Heat Rejection</h3>
      <p>High-quality ceramic tints can reject a significant amount of solar heat, keeping your cabin cooler.</p>
      <h3>UV Protection</h3>
      <p>Tints block up to 99% of harmful UV rays, protecting your skin and preventing your interior from fading.</p>
      <h3>Privacy & Safety</h3>
      <p>Tinting adds privacy and holds shattered glass together in case of an accident.</p>
    `,
        author: "Crystal Shine Team",
    },
];
