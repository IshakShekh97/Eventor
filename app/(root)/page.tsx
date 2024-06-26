import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="bg-primary-50 dark:bg-muted-foreground mt-28 py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold dark:text-black">
              Gather, Engage, Inspire: Your Events Our Solution
            </h1>
            <p className="p-regular-20 md:p-regular-24 dark:text-black">
              Join a global network of over 3,168 experts who share your passion
              for learning and growth
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit ">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src={"/assets/images/hero.png"}
            alt="hero-img"
            width={1000}
            height={1000}
            className="object-contain object-center max-h-[50vh]"
          />
        </div>
      </section>

      <section
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 "
        id="events"
      >
        <h2 className="h2-bold">Explore The Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <p>Search</p>
          <p>Categoty FIlter</p>
        </div>
      </section>
    </>
  );
};

export default page;
