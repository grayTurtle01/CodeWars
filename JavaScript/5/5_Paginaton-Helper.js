class PaginationHelper{
    
    constructor(collection, itemsPerPage){
        this.collection = collection
        this.itemsPerPage = itemsPerPage
    }

    pageCount(){
        let items = this.collection.length  

        return  Math.ceil(items / this.itemsPerPage)
    }

    itemCount(){
        return this.collection.length
    }

    
    pageItemCount(page){
        
       if( page > this.pageCount()-1 )
            return -1
            
       else if( page < this.pageCount() -1 )
          return this.itemsPerPage

       // last page 
       else{
           let full_pages = this.itemsPerPage * ( this.pageCount() - 1 )
           let dx = this.collection.length - full_pages
           return dx
       } 
    }

    pageIndex(itemIndex){
        if( itemIndex < 0 || itemIndex >= this.collection.length )
          return -1

        return Math.floor(item_index / this.itemsPerPage)
        
    }
}


h = new PaginationHelper(['a', 'b', 'c',   'd','e','f',  'g', 'h', 'i', 'j'], 3)

console.log(h.pageIndex(-1) )
