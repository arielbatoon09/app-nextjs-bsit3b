import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  const personData = [
    {
      id: 1,
      name: "Butchok",
      role: "Jungler",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)",
    },
    {
      id: 2,
      name: "Butchok",
      role: "Jungler",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)",
    },
    {
      id: 3,
      name: "Butchok",
      role: "Jungler",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)",
    },
    {
      id: 4,
      name: "Butchok",
      role: "Jungler",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)",
    }
  ]

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-8">
      {
        personData.map((person) => (
          <Card key={person.id}>
            <CardHeader>
              <CardTitle>{person.name}</CardTitle>
              <CardDescription>{person.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{person.description}</p>
            </CardContent>
            <CardFooter>
              <Link href="/about">
                <Button>Tap Me</Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}