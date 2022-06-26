import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <>
            <div style={{backgroundImage: "url(homepage_background_full.webp)", backgroundRepeat: "no-repeat", backgroundSize: "auto", backgroundPositionX: "right", backgroundPositionY: "center", height: "100%", position: "absolute", zIndex: "-1", width: "100%", backgroundColor: "#deedd6", maxHeight: "220px"}}></div>
            <Container style={{padding:'2.5em 0'}}>
                <Row className='py-2'>
                    <Col xxl={2}>Test</Col>
                    <Col xxl={5}>
                        <h1 style={{textAlign:'left'}}>Order Groceries for Delivery or Pickup Today</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={2}></Col>
                    <Col xxl={5} style={{textAlign:'left', fontSize: '1.04em'}}>Whatever you want from local stores, brought right to your door.</Col>
                </Row>
            </Container>
        </>
    )
}

export default Home