let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    
      let developers = arr.filter(arr => arr.profession === "developer");
      let developerNames = developers.map(developer => developer.name);
      console.log(developerNames);
  }
  
  function PrintDeveloperbyForEach() {
    
    arr.forEach(arr => {
        if (arr.profession === "developer") {
          console.log(arr);
        }
      });
  }
  
  function addData() {
    
    let newarr = {id: 4, name: "susan", age: "20", profession: "intern"};
    arr.push(newarr);
    console.log(newarr);
  }
  
  function removeAdmin() {
    
    let filteredarr = arr.filter(arr => arr.profession !== "admin");
    console.log(filteredarr);
  }
  
  function concatenateArray() {
    
    let newArr = [
        {id: 4, name: "subham", age: "21", profession: "intern"},
        {id: 5, name: "soumyo", age: "41", profession: "manager"},
        {id: 6, name: "dishant", age: "21", profession: "developer"}
      ];
    
      let concatenatedArray = arr.concat(newArr);
      console.log(concatenatedArray);
  }