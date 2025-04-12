
import { Artisan } from "@/data/types";

interface ArtisanInfoProps {
  artisan: Artisan;
}

const ArtisanInfo = ({ artisan }: ArtisanInfoProps) => {
  return (
    <div className="mt-8 pt-6 border-t border-eco-stone/20">
      <h3 className="text-lg font-semibold mb-2">About the Artisan</h3>
      <div className="flex items-center gap-4 mb-2">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{artisan.name}</p>
          <p className="text-sm text-muted-foreground">{artisan.location}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{artisan.story}</p>
    </div>
  );
};

export default ArtisanInfo;
