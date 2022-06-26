import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const StoreListing = () => {
    const locations = [{src: 'aldi.webp', name: 'ALDI'}, {src: 'woodmans.webp', name: 'Woodman\'s Food Markets'}, {src: 'festival.webp', name: 'Festival Foods'}, {src: 'PicknSave.webp', name: 'Pick\'n Save'}, {src: 'Metro.webp', name: 'Metro Market'}, {src: 'Target.webp', name: 'Target'}]
    return (
        <div>
            <h2>Browse stores in Madison</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row className='d-flex justify-content-evenly flex-wrap'>
                    {locations.map(location => (
                    <Col key={location.name} className='col-3 m-4 py-2 store' style={{ textAlign: 'start', borderRadius:'12px'}}>
                        <Row className="align-items-center">
                            <div style={{ width: '75px' }}><Image style={{ height: "60px", width: "60px", border: "1px solid #E8E9EB" }} src={location.src} roundedCircle /></div>
                            <Col className='mt-2'>
                                <h5 style={{ fontWeight: "bold" }}>{location.name}</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    ))}
                </Row>
                </Container>
            </div>
    )
}

export default StoreListing