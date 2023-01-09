     function   camelize(str) {
        return str

        .split("-")
        .map(function (item, index) {
          if (index == 0){
            item
          }
          else{item[0].toUpperCase() + item.slice(1)  }
        }
      )
        .join('')
      }
