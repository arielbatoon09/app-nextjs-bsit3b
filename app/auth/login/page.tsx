import Image from 'next/image';
import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
  return (
    <form className="p-10"
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button variant="outline" size="lg" type="submit">
        <Image src="/google-icon-logo.svg" alt="Google" width={18} height={18} />
        Signin with Google
      </Button>
    </form>
  )
}