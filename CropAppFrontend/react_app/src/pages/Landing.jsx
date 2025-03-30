import React from 'react';
import { Plane as Plant, Users, MessageCircle, ArrowRight, Star, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-lightgreen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-darkgreen">KrishiGaurd</span>
            <button className="px-6 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Protecting Your Crops with AI-Powered Solutions
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              KrishiGaurd uses advanced AI technology to detect plant diseases, connect you with experts, and build a supportive farming community.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b8c?auto=format&fit=crop&q=80"
              alt="Smart Farming"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Feature Buttons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Plant className="w-8 h-8" />}
              title="Detect Disease"
              description="Upload plant images for instant AI-powered disease detection"
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Talk to Expert"
              description="Connect with agricultural experts for personalized guidance"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Join Community"
              description="Be part of a thriving farming community"
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How KrishiGaurd Works</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <WorkflowStep
                number="1"
                title="Upload Image"
                description="Share photos of your crops"
              />
              <WorkflowStep
                number="2"
                title="AI Analysis"
                description="Get instant disease detection"
              />
              <WorkflowStep
                number="3"
                title="Expert Review"
                description="Receive professional advice"
              />
              <WorkflowStep
                number="4"
                title="Take Action"
                description="Implement targeted solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Farmers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Organic Farmer"
              content="KrishiGaurd helped me identify a disease in my wheat crop early, saving me from significant losses. The expert advice was invaluable."
              image="https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              name="Priya Patel"
              role="Agricultural Entrepreneur"
              content="The community support and expert guidance have transformed how I manage my farm. It's like having a team of experts in your pocket."
              image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              name="Amit Singh"
              role="Progressive Farmer"
              content="The AI disease detection is incredibly accurate. It's helped me maintain healthier crops and increased my yield significantly."
              image="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="support@krishigaurd.com" />
                <ContactInfo icon={<Phone />} text="+91 123 456 7890" />
                <ContactInfo icon={<MapPin />} text="123 Agri Tower, Tech Park, Bangalore" />
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              ></textarea>
              <button className="w-full px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-all duration-300">
        Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1" />
      </button>
    </div>
  );
}

function WorkflowStep({ number, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl relative z-10 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, content, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
      <div className="flex text-yellow-400 mt-4">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-emerald-600">{icon}</div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default App;