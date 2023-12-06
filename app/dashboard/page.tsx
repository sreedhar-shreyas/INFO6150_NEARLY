import Catnavbar from "./catnavbar/Catnavbar";
import getListings, { 
    IListingsParams
  } from "@/app/actions/getListings";
  import Container from "../components/Container"
  import EmptyState from "../components/EmptyState"
  import getCurrentUser from "@/app/actions/getCurrentUser";

  import ClientOnly from "../components/ClientOnly";
import ListingCard from "../components/listings/ListingCard";

  interface HomeProps {
    searchParams: IListingsParams
  };


  const Dashboard = async ({ searchParams }: HomeProps) => {
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();
  
    if (listings.length === 0) {
      return (
        <ClientOnly>
          <EmptyState showReset />
        </ClientOnly>
      );
    }

    return (
        
            <ClientOnly>
            Dashbuoard
            <Catnavbar/> 
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
            
    )
}

export default Dashboard;
