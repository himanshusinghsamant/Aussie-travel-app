import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  featured?: boolean;
}

interface DestinationCardProps {
  destination: Destination;
  variant?: "default" | "featured";
}

const DestinationCard = ({ destination, variant = "default" }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {destination.featured && (
            <Badge className="absolute top-3 left-3 bg-gradient-sunset text-white">
              Featured
            </Badge>
          )}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{destination.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="h-3 w-3" />
          <span>{destination.location}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {destination.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {destination.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary">${destination.price}</span>
          <span className="text-xs text-muted-foreground">per person</span>
        </div>
        <Link to={`/destinations/${destination.id}`}>
          <Button 
            variant={variant === "featured" ? "hero" : "default"} 
            size="sm"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;