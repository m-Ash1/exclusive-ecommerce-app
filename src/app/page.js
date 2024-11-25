import ActionButton from "./_components/ActionButton";
import CardList from "./_components/CardList";
import CategoryList from "./_components/CategoryList";
import MainPanner from "./_components/MainPanner";
import NavigationButtons from "./_components/NavigationButtons";
import SectionHeader from "./_components/SectionHeader";
import SectionTitle from "./_components/SectionTitle";
import SideNavigation from "./_components/SideNavigation";
import Timer from "./_components/Timer";

// export const revalidate = 0

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-12 pb-16">
        <SideNavigation />
        <MainPanner />
      </section>
      <section className="py-20  ">
        <SectionHeader>Today&apos;s</SectionHeader>
        <SectionTitle title="Flash Sales" render={<NavigationButtons />}>
          <Timer />
        </SectionTitle>
        <CardList />
        <div className="flex justify-center mt-6">
          <ActionButton>View All Products</ActionButton>
        </div>
      </section>
      <div className="hidden md:block h-[1px] bg-gray-200 w-full"></div>
      <section className="py-20">
        <SectionHeader>Categories</SectionHeader>
        <SectionTitle
          title="Browse By Category"
          render={<NavigationButtons />}
        />
        <CategoryList />
      </section>
      <div className="hidden md:block h-[1px] bg-gray-200 w-full"></div>
      <section className="py-20">
        <SectionHeader>This Month</SectionHeader>
        <SectionTitle
          title="Best Selling Products"
          render={<ActionButton>View All</ActionButton>}
        />
        <CardList />
      </section>
    </>
  );
}
