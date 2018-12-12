import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div>
        {this.props.pets.map(pet => (
          <Pet
            key={pet.id}
            pet={pet}
            is
            Adopted={pet.isAdopted}
            onAdoptPet={this.props.onAdoptPet}
          />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
