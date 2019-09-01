export interface Post{
  exhaustiveNbHits : boolean;
  hitsPerPage : number;
  nbHits : number;
  nbPages : number;
  page : number;
  params : string;
  processingTimeMS : number;
  query : string;
  hits : PostHitsList
}

interface PostHitsList extends Array<Hits>{}

interface Hits{
  author : string;
  comment_text : string;
  created_at : string;
  created_at_i : number;
  num_comments : number;
  objectID : string;
  parent_id : number;
  points : number;
  relevancy_score : number;
  story_id : number;
  story_text : string;
  story_title : string;
  story_url : string;
  title : string;
  url : string;
  _highlightResult : {
    author : {
      matchLevel : string;
      matchedWords : string[];
      value : string;
    }
    title : {
      matchLevel : string;
      matchedWords : string[];
      value : string;
    }
    url : {
      matchLevel : string;
      matchedWords : string[];
      value : string;
    }
  }
  _tags : string[];
}
