
async function getPlayerTokens(playerName) {
    const url = `https://v-devs.eu/softwares/magmacraft/services/tokens/${playerName}`;
  
    try {
      const response = await fetch(url);

      console.log(playerName);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      const tokens = result['MagmaCore.services.Users.Tokens'];
      return tokens;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async function getLastJoin(playerName) {
    const url = `https://v-devs.eu/softwares/magmacraft/services/lhrv/${playerName}`;
  
    try {
      const response = await fetch(url);

      console.log(playerName);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      const lastJoinString = result['services.magmacraft.lhrv.user']['last_join'];

      return lastJoinString;
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

    async function getPrefix(playerName) {
        const url = `https://v-devs.eu/softwares/magmacraft/services/prefix/${playerName}`;
      
        try {
          const response = await fetch(url);
    
          console.log(playerName);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const result = await response.json();
          const userPrefix = result['MagmaCore.services.Users.Prefix'];
    
          return userPrefix;
        } catch (error) {
          console.error(error);
          throw error;
        }
    }
  
module.exports = {getPlayerTokens : getPlayerTokens,getLastJoin : getLastJoin, getPrefix: getPrefix};