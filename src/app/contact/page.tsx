import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            Need help or have questions? Get in touch with us!
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          <div>
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-muted-foreground">support@instadownloader.com</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Phone:</p>
            <p className="text-muted-foreground">+123-456-7890</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Follow Us</p>
            <p className="text-muted-foreground">Stay connected for updates!</p>
            <div className="flex justify-center space-x-4">
              <Button variant="link" asChild>
                <a href="#">Instagram</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#">Facebook</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#">Twitter</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
