import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import { getFeaturedDestinations } from "@/data/destinations";
import { MapPin, Star, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  const featuredDestinations = getFeaturedDestinations();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore breathtaking destinations, book unforgettable experiences, 
              and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Explore Destinations
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TravelJoy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make travel planning effortless with our expert curation and seamless booking experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-ocean p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Secure Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your personal and payment information is protected with bank-level security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-sunset p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Expert Curation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every destination is carefully selected and verified by our travel experts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-ocean p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated support team is available around the clock to assist you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
              <p className="text-lg text-muted-foreground">
                Handpicked experiences for the adventurous traveler
              </p>
            </div>
            <Link to="/destinations">
              <Button variant="outline" size="lg">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id} 
                destination={destination} 
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who trust TravelJoy for their adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations">
              <Button variant="sunset" size="lg" className="text-lg px-8 py-6">
                Browse Destinations
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
