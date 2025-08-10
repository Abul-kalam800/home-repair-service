import React from "react";
import  { useState } from "react";



const BlogPage = () => {
    const blogs = [
  {
    id: 1,
    title: "Essential Plumbing Tips for Your Home",
    img: "https://i.postimg.cc/Z5nsK4z3/side-view-man-working-as-plumber.jpg",
    paragraph: `Plumbing is one of the most crucial systems in your home. Regularly inspecting pipes for leaks and corrosion can save you from expensive repairs. Always know where your main water shut-off valve is located. Cleaning drains regularly prevents blockages and foul odors. Use strainers in sinks and showers to trap debris. If you encounter low water pressure, it could be due to mineral buildup in faucets. Consider installing water-saving fixtures to reduce utility bills. Remember, small leaks can waste gallons of water daily. Fix dripping faucets promptly. Insulate exposed pipes during winter to prevent freezing. Professional maintenance every year ensures your plumbing runs smoothly.`,
    authorName: "John Smith",
    authorImg: "https://i.postimg.cc/bYFtfhg4/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chi.jpg",
  },
  {
    id: 2,
    title: "DIY Electrical Safety Guidelines",
    img: "https://i.postimg.cc/T1QQfHkC/arrangement-different-artisan-workshop-objects.jpg",
    paragraph: `Electrical work requires caution and the right tools. Always turn off the main breaker before repairs. Use insulated tools to avoid shocks. Never overload outlets, as it can lead to fire hazards. Replace damaged cords immediately. GFCI outlets in kitchens and bathrooms protect against electrocution. Check for warm outlets — this might indicate wiring issues. Avoid running cords under rugs as they can overheat. If a breaker trips often, it’s time to call an electrician. Label your breaker panel for quick identification. Keep water away from electrical devices. Periodically inspect your home's wiring for wear and tear.`,
    authorName: "Emily Johnson",
    authorImg: "https://i.postimg.cc/4N9b8yGW/nikita-pishchugin-H2781-Vd-Fxr0-unsplash.jpg",
  },
  {
    id: 3,
    title: "Interior Painting Like a Pro",
    img: "https://i.postimg.cc/rFngH3Rp/caucasian-couple-painting-wall-with-roller-brush-blue-paint-apartment-redecoration-home-construction.jpg",
    paragraph: `Painting can transform your home’s look. Start by cleaning walls to remove dust and grease. Use painter’s tape for clean edges. Primer ensures paint adheres well and colors pop. Choose high-quality brushes and rollers for even application. Work from top to bottom to avoid drips. Apply two coats for durability. Keep a wet edge to prevent lap marks. Proper ventilation helps paint dry faster. For accent walls, pick bold colors to create a focal point. Clean brushes immediately after use. Store leftover paint for future touch-ups.`,
    authorName: "David Lee",
    authorImg: "https://i.postimg.cc/zvLSYXgX/nussbaum-law-T4w6f2-Jrn-AM-unsplash.jpg",
  },
  {
    id: 4,
    title: "Roof Maintenance for All Seasons",
    img: "https://i.postimg.cc/9Qsbm9p5/long-shot-roofer-working-with-helmet.jpg",
    paragraph: `Your roof shields your home from the elements. Inspect it twice a year for missing or damaged shingles. Clean gutters to prevent water backup. Trim overhanging branches to avoid debris buildup. Check attic ventilation to prevent moisture damage. Look for moss or algae growth and treat it promptly. Seal flashing around chimneys and vents. Heavy snow should be removed to prevent excess weight. After storms, check for damage and repair immediately. A well-maintained roof extends its lifespan and saves you from costly replacements.`,
    authorName: "Sarah Miller",
    authorImg: "https://i.postimg.cc/VNrYtxn0/portrait-confident-happy-woman-with-short-hair-cross-arms-chest-like-professional-smiling-standing-a.jpg",
  },
  {
    id: 5,
    title: "Smart Home Security Upgrades",
    img: "https://i.postimg.cc/85mmm0VN/person-using-smartphone-his-automated-home.jpg",
    paragraph: `Home security has evolved with technology. Install motion-sensor lights around entrances. Smart doorbells let you see visitors remotely. Reinforce doors with deadbolts and strike plates. Security cameras with night vision offer 24/7 surveillance. Use timers for lights when away to mimic occupancy. Secure windows with locks or bars. Install a home alarm system connected to your phone. Keep your Wi-Fi network secure to prevent hacking of smart devices. Regularly update passwords for all connected devices.`,
    authorName: "Michael Brown",
    authorImg: "https://i.postimg.cc/bJVH52dB/istockphoto-534799961-1024x1024.jpg",
  },
  {
    id: 6,
    title: "Budget-Friendly Bathroom Renovations",
    img: "https://i.postimg.cc/zXBFT72Y/young-woman-checking-water-before-taking-bath.jpg",
    paragraph: `Bathroom renovations don’t have to break the bank. Replacing old fixtures can refresh the space instantly. Use peel-and-stick tiles for a cost-effective makeover. Paint cabinets instead of replacing them. Install a new shower curtain and rugs for a fresh look. Update lighting to brighten the room. Add mirrors to create an illusion of space. Consider water-saving faucets and showerheads to lower bills. Regrouting tiles can make floors look new. Declutter countertops for a cleaner appearance.`,
    authorName: "Anna Wilson",
    authorImg: "https://i.postimg.cc/9fJG4qPQ/md-duran-h-YLXO9-FBIc4-unsplash.jpg",
  },
];
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-10 bg-bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center my-10 text-green-400 ">
         Our Blog Section
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => {
            const isExpanded = expanded[blog.id];
            const preview =
              blog.paragraph.split(" ").slice(0, 20).join(" ") + "...";
            return (
              <div
                key={blog.id}
                className="bg-base-300 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <div className="flex items-center my-4">
                    <img
                      src={blog.authorImg}
                      alt={blog.authorName}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">
                      {blog.authorName}
                    </span>
                  </div>
                  <p className="mb-3">
                    {isExpanded ? blog.paragraph : preview}
                  </p>
                  <button
                    onClick={() => toggleExpand(blog.id)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;