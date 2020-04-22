// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    const count = this.collection.length;
    console.log('itemCount: ', count)
    return count;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    const numPages = Math.ceil(this.collection.length / this.itemsPerPage);
    console.log('numPages:', numPages);
    return numPages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    // let initArr = [...this.collection];
    // console.log('page item count');
    const pageArr = [];
    for (let i=0; i < this.collection.length; i+= this.itemsPerPage) {
        console.log('i:', i);
        const pageItems = this.collection.slice(i, i+this.itemsPerPage);
        console.log('pageItems:', pageItems)
        pageArr.push(pageArr.push(pageItems));
    }
    console.log('pageArr:', pageArr);
    console.log('pageArr[pageIndex].count: ', pageArr[pageIndex].length);
    return pageArr[pageIndex].length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log('helper: ',helper);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid