import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";

/* ─── Full product catalog (mirrors Category.js) ─────────────────────── */
const PRODUCTS = [
  { name: "Đèn Bàn",           category: "lamps",  rating: "★★★★★", price: "₫1,477,800",  originalPrice: "₫1,477,800"  },
  { name: "Đèn Sàn",           category: "lamps",  rating: "★★★★★", price: "₫1,979,100",  originalPrice: "₫2,480,100"  },
  { name: "Đèn Hiện Đại",      category: "lamps",  rating: "★★★★☆", price: "₫1,477,800",  originalPrice: "₫1,728,600"  },
  { name: "Đèn Vintage",       category: "lamps",  rating: "★★★★★", price: "₫1,979,100",  originalPrice: "₫2,480,100"  },
  { name: "Đèn Bàn Làm Việc",  category: "lamps",  rating: "★★★★☆", price: "₫989,100",    originalPrice: "₫1,227,600"  },
  { name: "Giường Hiện Đại",   category: "beds",   rating: "★★★★★", price: "₫7,490,100",  originalPrice: "₫8,745,600"  },
  { name: "Giường King Size",  category: "beds",   rating: "★★★★★", price: "₫9,995,100",  originalPrice: "₫11,247,600" },
  { name: "Giường Gỗ",         category: "beds",   rating: "★★★★★", price: "₫7,490,100",  originalPrice: "₫11,247,600" },
  { name: "Giường Hiện Đại Kiểu", category: "beds", rating: "★★★★★", price: "₫7,991,100", originalPrice: "₫9,243,600"  },
  { name: "Giường Tối Giản",   category: "beds",   rating: "★★★★☆", price: "₫6,989,100",  originalPrice: "₫8,241,600"  },
  { name: "Sofa Da",           category: "sofas",  rating: "★★★★★", price: "₫12,500,100", originalPrice: "₫13,752,600" },
  { name: "Sofa Hiện Đại",     category: "sofas",  rating: "★★★★★", price: "₫9,995,100",  originalPrice: "₫11,247,600" },
  { name: "Sofa Nhung",        category: "sofas",  rating: "★★★★★", price: "₫11,498,100", originalPrice: "₫12,500,100" },
  { name: "Sofa Gọn Nhẹ",      category: "sofas",  rating: "★★★★☆", price: "₫8,750,100",  originalPrice: "₫9,744,600"  },
  { name: "Sofa Hình Chữ L",   category: "sofas",  rating: "★★★★★", price: "₫15,005,100", originalPrice: "₫16,257,600" },
  { name: "Bàn Cà Phê",        category: "tables", rating: "★★★★★", price: "₫3,230,100",  originalPrice: "₫3,732,600"  },
  { name: "Bàn Ăn",            category: "tables", rating: "★★★★★", price: "₫7,490,100",  originalPrice: "₫8,745,600"  },
  { name: "Bàn Phụ",           category: "tables", rating: "★★★★☆", price: "₫1,979,100",  originalPrice: "₫2,480,100"  },
  { name: "Bàn Tròn",          category: "tables", rating: "★★★★☆", price: "₫3,732,600",  originalPrice: "₫4,233,600"  },
  { name: "Bàn Kính",          category: "tables", rating: "★★★★★", price: "₫4,985,100",  originalPrice: "₫5,736,600"  },
];

/* ─── Helpers ─────────────────────────────────────────────────────────── */
const toNumber = (priceStr) =>
  parseInt(priceStr.replace(/[₫,\s]/g, ""), 10);

const fmt = (p) => `*${p.name}* — ${p.price} ${p.rating}`;

/* English → category key */
const CAT_MAP = {
  lamp: "lamps", light: "lamps", lighting: "lamps", chandelier: "lamps",
  bed: "beds", bedroom: "beds", sleep: "beds", mattress: "beds", giường: "beds",
  sofa: "sofas", couch: "sofas", settee: "sofas", "living room": "sofas",
  table: "tables", desk: "tables", dining: "tables", coffee: "tables", bàn: "tables",
};

const CAT_LABEL = {
  lamps: "Lamps 💡",
  beds: "Beds 🛏",
  sofas: "Sofas 🛋",
  tables: "Tables 🪑",
};

/* English keywords → Vietnamese product name */
const PRODUCT_MAP = {
  "table lamp": "Đèn Bàn",
  "floor lamp": "Đèn Sàn",
  "modern lamp": "Đèn Hiện Đại",
  "vintage lamp": "Đèn Vintage",
  "desk lamp": "Đèn Bàn Làm Việc",
  "work lamp": "Đèn Bàn Làm Việc",
  "office lamp": "Đèn Bàn Làm Việc",
  "modern bed": "Giường Hiện Đại",
  "king size": "Giường King Size",
  "king bed": "Giường King Size",
  "wooden bed": "Giường Gỗ",
  "wood bed": "Giường Gỗ",
  "sleek bed": "Giường Hiện Đại Kiểu",
  "minimalist bed": "Giường Tối Giản",
  "leather sofa": "Sofa Da",
  "modern sofa": "Sofa Hiện Đại",
  "velvet sofa": "Sofa Nhung",
  "compact sofa": "Sofa Gọn Nhẹ",
  "l-shape": "Sofa Hình Chữ L",
  "l shape": "Sofa Hình Chữ L",
  "sectional sofa": "Sofa Hình Chữ L",
  "corner sofa": "Sofa Hình Chữ L",
  "coffee table": "Bàn Cà Phê",
  "dining table": "Bàn Ăn",
  "dinner table": "Bàn Ăn",
  "side table": "Bàn Phụ",
  "round table": "Bàn Tròn",
  "glass table": "Bàn Kính",
};

/* ─── Core response engine ────────────────────────────────────────────── */
const getResponse = (raw) => {
  const q = raw.toLowerCase().trim();

  /* --- Greeting --- */
  if (/\b(hi|hello|hey|xin ch[àa]o|ch[àa]o)\b/.test(q)) {
    return "Hi! 👋 Welcome to *Nhà Mình* furniture store.\nYou can ask me things like:\n• \"What products do you have?\"\n• \"Show me sofas\"\n• \"Most expensive product?\"\n• \"How much is the leather sofa?\"";
  }

  /* --- Help --- */
  if (/\b(help|what can you|can you do)\b/.test(q)) {
    return "Here's what I can help with 📋\n• List all products or by category (sofa, bed, lamp, table)\n• Find price of a specific item\n• Compare: most expensive / cheapest\n• Top-rated products";
  }

  /* --- List ALL products --- */
  if (/\b(all|every|full list|everything)\b/.test(q) ||
      /(what|which).*(product|item|furniture|do you have|do you sell)/i.test(q) ||
      /list.*(product|item|furniture)/i.test(q) ||
      /show.*(all|everything)/i.test(q)) {
    const bycat = {};
    PRODUCTS.forEach((p) => {
      if (!bycat[p.category]) bycat[p.category] = [];
      bycat[p.category].push(p.name);
    });
    return (
      `We have *${PRODUCTS.length} products* in 4 categories:\n\n` +
      Object.entries(bycat)
        .map(([cat, names]) => `${CAT_LABEL[cat]} (${names.length}):\n  ${names.join(", ")}`)
        .join("\n\n")
    );
  }

  /* --- Most expensive / cheapest (global or per-category) --- */
  const isExpensive = /\b(expensive|highest price|most costly|priciest|highest)\b/.test(q);
  const isCheap     = /\b(cheap|cheapest|lowest price|most affordable|budget|affordable|lowest)\b/.test(q);

  if (isExpensive || isCheap) {
    // Check if a category is also mentioned
    let pool = PRODUCTS;
    for (const [kw, cat] of Object.entries(CAT_MAP)) {
      if (q.includes(kw)) { pool = PRODUCTS.filter(p => p.category === cat); break; }
    }

    const sorted = [...pool].sort((a, b) =>
      isExpensive ? toNumber(b.price) - toNumber(a.price)
                  : toNumber(a.price) - toNumber(b.price)
    );
    const top = sorted.slice(0, 3);
    const label = isExpensive ? "most expensive 💎" : "most affordable 💚";
    return (
      `The *${label}* products${pool.length < PRODUCTS.length ? ` in that category` : ""}:\n` +
      top.map((p, i) => `${i + 1}. ${fmt(p)}`).join("\n")
    );
  }

  /* --- Top rated --- */
  if (/\b(best|top.?rated|highest.?rated|rating)\b/.test(q)) {
    const fiveStars = PRODUCTS.filter(p => p.rating === "★★★★★");
    return (
      `We have *${fiveStars.length}* five-star ★★★★★ products:\n` +
      fiveStars.map(p => `• ${p.name} — ${p.price}`).join("\n")
    );
  }

  /* --- Specific product name lookup (English keyword → Vietnamese) --- */
  for (const [keyword, viName] of Object.entries(PRODUCT_MAP)) {
    if (q.includes(keyword)) {
      const product = PRODUCTS.find(p => p.name === viName);
      if (product) {
        const discount = Math.round(
          (1 - toNumber(product.price) / toNumber(product.originalPrice)) * 100
        );
        return (
          `📦 *${product.name}*\n` +
          `💰 Price: ${product.price}${discount > 0 ? ` (${discount}% off from ${product.originalPrice})` : ""}\n` +
          `⭐ Rating: ${product.rating}\n` +
          `🏷 Category: ${CAT_LABEL[product.category]}\n\n` +
          `You can view it in *AR* on our Categories page!`
        );
      }
    }
  }

  /* --- Category listing --- */
  for (const [kw, cat] of Object.entries(CAT_MAP)) {
    if (q.includes(kw)) {
      const items = PRODUCTS.filter(p => p.category === cat);
      const sorted = [...items].sort((a, b) => toNumber(a.price) - toNumber(b.price));
      return (
        `${CAT_LABEL[cat]} — *${items.length} products*:\n` +
        sorted.map(p => `• ${p.name} — ${p.price} ${p.rating}`).join("\n") +
        `\n\nCheapest: *${sorted[0].name}* at ${sorted[0].price}\nPriciest: *${sorted[sorted.length-1].name}* at ${sorted[sorted.length-1].price}`
      );
    }
  }

  /* --- Price / how much general --- */
  if (/\b(price|cost|how much|bao nhiêu)\b/.test(q)) {
    return "💬 Which product are you asking about? Try:\n• \"Price of leather sofa\"\n• \"How much is the king bed?\"\n• \"Coffee table price\"";
  }

  /* --- AR / 3D --- */
  if (/\b(ar|3d|augmented|reality|model|view)\b/.test(q)) {
    return "🥽 All our products support *AR (Augmented Reality)* viewing!\nGo to the *Categories* page, click the cube icon 📦 on any product to see it in your room before buying.";
  }

  /* --- Fallback --- */
  return "I'm not sure about that 🤔 Try asking:\n• \"What products do you have?\"\n• \"Show me beds\"\n• \"Most expensive sofa?\"\n• \"Price of coffee table\"";
};

/* ─── Quick-reply suggestions ─────────────────────────────────────────── */
const QUICK_REPLIES = [
  "What products do you have?",
  "Show me sofas",
  "Show me beds",
  "Show me lamps",
  "Most expensive product?",
  "Cheapest table?",
  "Best rated products?",
];

/* ─── Component ───────────────────────────────────────────────────────── */
const Chatbot = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 Welcome to *Nhà Mình*.\nI can help you find furniture, check prices, and compare products.\n\nTry one of the suggestions below ⬇️",
      sender: "bot",
    },
  ]);
  const [input, setInput]     = useState("");
  const messagesEndRef         = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { text, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: getResponse(text), sender: "bot" };
      setMessages(prev => [...prev, botReply]);
    }, 350);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage(input);
  };

  /* Render message text — bold between * * */
  const renderText = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, i) =>
      part.startsWith("*") && part.endsWith("*")
        ? <strong key={i}>{part.slice(1, -1)}</strong>
        : part
    );
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h4>🏠 Nhà Mình Chat</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text.split("\n").map((line, j) => (
                  <span key={j}>{renderText(line)}{j < msg.text.split("\n").length - 1 && <br />}</span>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="chatbot-quick-replies">
            {QUICK_REPLIES.map((qr, i) => (
              <button key={i} className="quick-reply-btn" onClick={() => sendMessage(qr)}>
                {qr}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about our products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
