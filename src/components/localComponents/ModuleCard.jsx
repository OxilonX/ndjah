import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
export function ModuleCard({ title, image, youtubeUrl, channel }) {
  return (
    <Card className="gap-0 bg-foreground/90 dark:bg-foreground/5 overflow-hidden group shadow-lg transition-all duration-300 border-none  pt-0">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <CardHeader className="pt-6 mt-auto">
        <h2 className="text-background dark:text-foreground/90 text-base font-medium leading-7 tracking-tight">
          {title}
        </h2>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <CircleUser className="fill-primary dark:fill-primary/60" />
            <h3 className=" text-sm text-background/80 dark:text-foreground/70 font-medium ">
              {channel}
            </h3>
          </div>
        </div>
      </CardContent>

      <CardFooter className={"py-6 "}>
        <Button
          className="w-full bg-primary hover:bg-primary/90 font-semibold cursor-pointer"
          onClick={() => window.open(youtubeUrl, "_blank")}
        >
          Watch on YouTube
        </Button>
      </CardFooter>
    </Card>
  );
}
