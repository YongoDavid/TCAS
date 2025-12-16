import { Article } from './types'

export const articles: Article[] = [
  {
    id: 'accidented-cars-disguised',
    title: 'How Accidented Cars Are Disguised as Foreign-Used',
    excerpt: 'Salvage vehicles from the US are imported, cosmetically repaired, and sold as clean foreign-used cars. Learn how to spot them.',
    tag: 'Scam Alert',
    tagColor: 'bg-[#EF4444]/20 text-[#EF4444]',
    icon: '🚨',
    readTime: 6,
    sections: [
      {
        title: 'The Salvage Pipeline',
        content: 'Every year, thousands of vehicles totaled in US accidents are sold at salvage auctions for a fraction of their pre-accident value. These cars — often with severe structural damage, flood damage, or airbag deployments — are purchased by exporters who ship them to Nigeria.'
      },
      {
        title: 'The Cosmetic Transformation',
        content: 'Once in Nigeria, skilled body shops perform cosmetic repairs. Dents are filled, panels are replaced or repainted, and interiors are cleaned. The goal is simple: make the car look like it just rolled off a US lot. But underneath the fresh paint, the frame may be bent, the airbags may be fake, and the safety systems may be compromised.'
      },
      {
        title: 'Why Photos Lie',
        content: 'Dealers share photos showing pristine exteriors and clean interiors. What they don\'t show: the undercarriage corrosion, the misaligned panels, the replaced VIN stickers, or the warning lights that have been disabled. A photo tells you what the dealer wants you to see — nothing more.'
      },
      {
        title: 'The "Foreign-Used" Label',
        content: '"Foreign-used" has become a marketing term that implies quality. Buyers assume it means the car was gently used by a single owner in America. In reality, it often means the car was used until it was destroyed, then shipped here for a second life.'
      },
      {
        title: 'How to Protect Yourself',
        content: 'Always request the VIN and run a history check. Look for signs of repainting (overspray on rubber seals, mismatched paint texture). Check panel gaps — uneven spacing indicates body work. Ask for the original title type — a salvage or rebuilt title is a red flag. Most importantly, get an independent inspection before paying.'
      },
      {
        title: 'The Real Cost',
        content: 'Buyers who purchase disguised accident cars often face expensive repairs within months. Transmission failures, electrical issues, and suspension problems are common. Some discover their "bargain" is worth far less than they paid — if they can resell it at all.'
      }
    ]
  },
  {
    id: 'price-red-flags',
    title: 'Why Price Alone Is a Red Flag',
    excerpt: 'Dealers use emotional selling and fake urgency to justify inflated prices. Understand the real cost breakdown.',
    tag: 'Pricing',
    tagColor: 'bg-[#F59E0B]/20 text-[#F59E0B]',
    icon: '💰',
    readTime: 5,
    sections: [
      {
        title: 'The Urgency Trap',
        content: '"This price is only valid today." "I have three other buyers interested." "The owner is traveling and needs to sell immediately." These phrases are designed to prevent you from thinking clearly. Legitimate sellers don\'t pressure you into instant decisions.'
      },
      {
        title: 'The Emotional Sell',
        content: 'Dealers know that car buying is emotional. They\'ll talk about how the car "drives like butter" or how you\'ll "turn heads on the street." What they won\'t discuss: the actual cost breakdown, the vehicle\'s true history, or why the price is what it is.'
      },
      {
        title: 'Hidden Margins',
        content: 'A dealer might claim they\'re selling at cost, but the real math tells a different story. A car bought at US auction for $8,000, shipped for $2,500, and cleared for $4,000 might be listed at ₦18 million — that\'s a significant markup the dealer won\'t explain.'
      },
      {
        title: 'The "Negotiation" Illusion',
        content: 'When a dealer quickly drops their price by ₦500,000, it feels like a win. But if the car was overpriced by ₦2 million, you\'re still overpaying. The willingness to negotiate is often built into an inflated starting price.'
      },
      {
        title: 'Comparing Prices',
        content: 'Before accepting any price, research what similar vehicles sell for. Check auction prices on Copart and IAAI. Understand shipping and clearing costs. A fair price accounts for all these factors with a reasonable profit margin — not an exploitative one.'
      }
    ]
  },
  {
    id: 'vin-checks-explained',
    title: 'VIN Checks — What They Reveal (And What They Don\'t)',
    excerpt: 'VIN reports are useful but have limits. Learn what they show, what they miss, and common misconceptions.',
    tag: 'Technical',
    tagColor: 'bg-[#3B82F6]/20 text-[#3B82F6]',
    icon: '🔍',
    readTime: 7,
    sections: [
      {
        title: 'What a VIN Is',
        content: 'The Vehicle Identification Number is a 17-character code unique to every vehicle. It contains information about the manufacturer, model year, engine type, and production sequence. More importantly, it\'s the key to accessing a vehicle\'s recorded history.'
      },
      {
        title: 'What VIN Reports Show',
        content: 'A comprehensive VIN report can reveal: title history (clean, salvage, rebuilt), reported accidents, odometer readings over time, recall information, and previous owners. This information comes from insurance companies, DMVs, and service records.'
      },
      {
        title: 'What VIN Reports Miss',
        content: 'Not all accidents are reported. If a car was repaired out of pocket or fixed at an unregistered shop, it won\'t appear on the report. Flood damage in certain states may not be recorded. Vehicles from private sales without insurance claims leave no trace.'
      },
      {
        title: 'The Cloned VIN Problem',
        content: 'Some sellers use VINs from clean vehicles on damaged ones. The report shows a perfect history, but you\'re looking at a different car entirely. Always verify the VIN on the dashboard matches the one on the door jamb, engine, and paperwork.'
      },
      {
        title: 'Nigerian Records Gap',
        content: 'Once a vehicle leaves the US, its history trail often ends. Any repairs, accidents, or modifications in Nigeria won\'t appear on American VIN reports. The car could have been crashed twice since arriving, and the report would show nothing.'
      },
      {
        title: 'Using VIN Checks Wisely',
        content: 'VIN checks are a useful tool, not a guarantee. A clean report is a good sign, but it doesn\'t replace a physical inspection. A salvage title is a clear warning. Use VIN history as one piece of your decision-making process, not the only piece.'
      }
    ]
  },
  {
    id: 'import-cost-breakdown',
    title: 'The Real Cost of Importing a Car to Nigeria',
    excerpt: 'Auction price, shipping, clearing, and dealer margin — understand where your money actually goes.',
    tag: 'Education',
    tagColor: 'bg-[#8B5CF6]/20 text-[#8B5CF6]',
    icon: '🚢',
    readTime: 8,
    sections: [
      {
        title: 'Auction Price',
        content: 'This is where it starts. A 2020 Toyota Camry might sell at Copart for $12,000-$18,000 depending on condition, mileage, and damage. Clean titles cost more; salvage titles cost less. The auction price is public information — you can verify it yourself.'
      },
      {
        title: 'Auction Fees',
        content: 'On top of the hammer price, buyers pay auction fees (8-12% depending on the platform), title fees, and storage fees if the car isn\'t picked up quickly. A $15,000 auction price might cost $17,000-$18,000 before it leaves the yard.'
      },
      {
        title: 'Shipping Costs',
        content: 'Ocean freight from the US to Lagos typically costs $1,800-$3,500 depending on the vehicle size and shipping method (RoRo vs container). Add inland transportation to the port, marine insurance, and loading fees. Budget $2,500-$4,000 total.'
      },
      {
        title: 'Clearing and Duties',
        content: 'Nigeria\'s import duties depend on the vehicle\'s age and engine size. For a typical sedan, expect 35% of the CIF value (cost + insurance + freight), plus CISS fees, terminal handling, and agent charges. This can add ₦3-6 million to the cost.'
      },
      {
        title: 'Transportation and Prep',
        content: 'Once cleared, the car needs to reach the dealer\'s lot. Add local transportation, basic repairs or touch-ups, and registration costs. This might be another ₦200,000-500,000.'
      },
      {
        title: 'The Dealer\'s Margin',
        content: 'After all costs, dealers add their profit. A reasonable margin is 10-15%. But some dealers add 30-50%, knowing buyers can\'t verify the real numbers. Understanding the true cost helps you negotiate from a position of knowledge.'
      },
      {
        title: 'Example Calculation',
        content: 'A 2020 Camry: Auction $15,000 + Fees $2,000 + Shipping $3,000 + Clearing ₦4,500,000 + Local costs ₦300,000 = Total cost around ₦12-13 million. A fair selling price would be ₦14-15 million. If you\'re quoted ₦20 million, someone is overcharging.'
      }
    ]
  },
  {
    id: 'questions-to-ask',
    title: 'Questions Every Buyer Should Ask Before Paying',
    excerpt: 'A practical checklist of questions that expose dishonest dealers and protect your investment.',
    tag: 'Checklist',
    tagColor: 'bg-[#10B981]/20 text-[#10B981]',
    icon: '✅',
    readTime: 4,
    sections: [
      {
        title: 'About the Vehicle History',
        content: '"Can I see the original title?" A salvage or rebuilt title reveals accident history. "What does the VIN report show?" If they hesitate, that\'s your answer. "Was this car ever in an accident?" Watch their body language.'
      },
      {
        title: 'About the Price',
        content: '"Can you break down how you arrived at this price?" Legitimate dealers can explain auction cost, shipping, and clearing. "Why is this priced higher/lower than similar cars?" The answer reveals their knowledge and honesty.'
      },
      {
        title: 'About the Inspection',
        content: '"Can I have my mechanic inspect it before I pay?" A "no" is a dealbreaker. "Can we drive it together?" Any hesitation suggests hidden problems. "Can you show me the undercarriage?" This is where damage hides.'
      },
      {
        title: 'About the Documentation',
        content: '"Can I see all import documents?" Bill of lading, clearing papers, and duty receipts should be available. "Is the customs duty fully paid?" Partially cleared cars can be seized. "Is this car registered in your name?"'
      },
      {
        title: 'About the Dealer',
        content: '"How long have you been selling cars?" New dealers may not understand what they\'re selling. "Can I speak to previous customers?" Reputable dealers have references. "What\'s your return policy?" Most won\'t offer one, but the conversation is telling.'
      },
      {
        title: 'Red Flag Responses',
        content: 'Watch for: "Just trust me." "I don\'t have that paperwork here." "The price goes up if you leave." "No one else asks these questions." These responses suggest you should walk away.'
      }
    ]
  }
]