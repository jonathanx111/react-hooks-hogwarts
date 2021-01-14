import Hog from './Hog.js'

function HogList({ hogs, greasedState, sortState }) {
    
    const filteredHogs = hogs.filter((hog) => {
        if (!greasedState) return true
        return hog.greased === greasedState
    })
    .sort((a,b) => {
        if (!sortState) {
            console.log(sortState)
            return (a.name > b.name) ? 1 : -1
        } else {
            console.log(sortState)
            return (a.weight > b.weight) ? 1 : -1
        }
    })
    


    const hogsListCards = filteredHogs.map(hog => {
       return <Hog
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedal={hog['highest medal achieved']}
        />
    })

    return (
        <div className = 'ui grid container'>
            {hogsListCards}
        </div>
    )
}

export default HogList