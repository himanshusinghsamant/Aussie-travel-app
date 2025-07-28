import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { getDestinationById } from "@/data/destinations";
import { MapPin, Star, Calendar, Users, ArrowLeft, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = id ? getDestinationById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Destination not found</h1>
          <p className="text-muted-foreground mb-6">
            The destination you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/destinations">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    toast.success("Booking request submitted! We'll contact you soon.", {
      description: `Your interest in "${destination.title}" has been recorded.`
    });
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(isFavorited ? "Removed from favorites" : "Added to favorites");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/destinations" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to destinations
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{destination.location}</span>
                {destination.featured && (
                  <Badge className="bg-gradient-sunset text-white">Featured</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{destination.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{destination.rating}</span>
                  <span className="text-muted-foreground">
                    ({destination.reviews.length} reviews)
                  </span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${destination.price} <span className="text-sm font-normal text-muted-foreground">per person</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleToggleFavorite}
                className={isFavorited ? "text-red-500 hover:text-red-600" : ""}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
              </Button>
              <Button variant="hero" size="lg" onClick={handleBookNow}>
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <img
                src={destination.images[selectedImage]}
                alt={destination.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-elevated"
              />
            </div>
            <div className="space-y-4">
              {destination.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${destination.title} ${index + 1}`}
                  className={`w-full h-24 lg:h-[156px] object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedImage === index 
                      ? "ring-2 ring-primary shadow-elevated" 
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this destination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.fullDescription}
                </p>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Reviews</h2>
                <div className="space-y-6">
                  {destination.reviews.map((review) => (
                    <Card key={review.id} className="shadow-card">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={review.userAvatar} alt={review.userName} />
                            <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.userName}</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < review.rating 
                                        ? "text-yellow-400 fill-current" 
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="shadow-elevated">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${destination.price}
                    </div>
                    <div className="text-muted-foreground">per person</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full" 
                    onClick={handleBookNow}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book This Adventure
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Free cancellation up to 24 hours before
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span>7-10 days</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Group size</span>
                      <span>2-12 people</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty</span>
                      <span>Moderate</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Expert
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;