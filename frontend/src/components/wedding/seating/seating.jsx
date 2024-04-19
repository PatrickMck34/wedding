function assignSeats(parties, tables) {
    // Sort parties in ascending order
    parties.sort((a, b) => a.guests - b.guests);
  
    let assignments = [];
  
    for (let table of tables) {
      let availableSeats = table.seats;
  
      for (let i = 0; i < parties.length; i++) {
        let party = parties[i];
  
        if (party.guests <= availableSeats) {
          assignments.push({ table: table.number, party: party.name });
          availableSeats -= party.guests;
  
          // Remove the party from the array
          parties.splice(i, 1);
          i--; // Adjust the index after removing an item
        }
      }
    }
  
    if (parties.length > 0) {
      return `No suitable table found for parties: ${parties.map(party => party.name).join(', ')}`;
    }
  
    return assignments;
  }

  let parties = [
    { name: 'McKinney', guests: 4 },
    { name: 'Smith', guests: 2 },
    { name: 'George', guests: 6 },
    { name: 'Johnson', guests: 3 },
    { name: 'Lecrois', guests: 1 },
  ];
  
  let tables = [
    { number: 1, seats: 4 },
    { number: 2, seats: 6 },
    { number: 3, seats: 2 },
    { number: 4, seats: 3 },
  ];