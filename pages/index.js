import MeetupList from '../components/meetups/MeetupList';
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/25549367-emirates-airline-cable-car-640x360.jpg?w=310&hash=EAFEA9B59F590FF4EA2E4D88415E8DBACD09CB46',
        address: 'Some address 5, 12345 Some',
        description: 'this is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/25549367-emirates-airline-cable-car-640x360.jpg?w=310&hash=EAFEA9B59F590FF4EA2E4D88415E8DBACD09CB46',
        address: 'Some address 6f, 123dd Some city',
        description: 'this is a second meetup'
    }
]
function HomePage(props) {
    return <MeetupList meetups={props?.meetups} />
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage;