//  defining types for Trip
interface Trip {
    pickUpPoints: string[];
    dropPoints: string[];
    viaPoint?: string;
}

// defining types for Shipment
interface Shipment {
    pickUpPoints: string[];
    dropPoints: string[];
}

// function to validate trips
function validateTrips(shipment: Shipment, trips: Trip[]): boolean {
    const visitedPickUpPoints = new Set<string>(); // set to store visited pickUpPoints
    const visitedDropPoints = new Set<string>(); // set to store visited dropPoints

    // check if all pickUpPoints and dropPoints are visited
    for (const trip of trips) {
        for (const pickUpPoint of trip.pickUpPoints) {
            if (!shipment.pickUpPoints.includes(pickUpPoint) || visitedPickUpPoints.has(pickUpPoint)) {
                return false;
            }
            visitedPickUpPoints.add(pickUpPoint);
        }

        // check if viaPoint is visited
        if (trip.viaPoint && !shipment.pickUpPoints.includes(trip.viaPoint) && !shipment.dropPoints.includes(trip.viaPoint)) {
            return false;
        }

        // check if all dropPoints are visited
        for (const dropPoint of trip.dropPoints) {
            if (!shipment.dropPoints.includes(dropPoint) || visitedDropPoints.has(dropPoint)) {
                return false;
            }
            visitedDropPoints.add(dropPoint);
        }
    }

    // check if all pickUpPoints and dropPoints are visited
    return visitedPickUpPoints.size === shipment.pickUpPoints.length && visitedDropPoints.size === shipment.dropPoints.length;
}

// Example shipment and trips
const shipment: Shipment = {
    pickUpPoints: ['A', 'B'],
    dropPoints: ['C', 'D'],
};

// Example trips
const trips: Trip[] = [
    { pickUpPoints: ['A'], dropPoints: ['W'] },
    { pickUpPoints: ['B'], dropPoints: ['W'] },
    { pickUpPoints: ['W'], dropPoints: ['C'] },
    { pickUpPoints: ['W'], dropPoints: ['D'] },
];

console.log(validateTrips(shipment, trips));
