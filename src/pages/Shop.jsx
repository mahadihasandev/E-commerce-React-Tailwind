import Container from "../component/Container"
import Flex from "../component/Flex"
import Pagination from "../component/Pagination"

function Shop() {
  return (
  <>
       <section>
        <Container>
          <Flex>
            <div className="w-3/12">
            
            </div>
            <div className="w-9/12 pt-10">

              <Pagination itemsPerPage={9} />
            </div>
          </Flex>
        </Container>
       </section>
    </>
  )
}

export default Shop