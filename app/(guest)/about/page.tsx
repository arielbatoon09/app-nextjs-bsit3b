import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}