export class Article
{
    title: string;
    link: string;
    votes: number;

    constructor(t: string,l: string,v: number)
    {
        this.title=t;
        this.link=l;
        this.votes=v || 0;
    }
    voteUp()
  {
    this.votes +=1;
    return false;
  }
  voteDown()
  {
      this.votes -=1;
      return false;
  }

  domain(): string
  {
      try{
          const domainAndPath: string = this.link.split('//')[1];
          return domainAndPath.split('/')[0];
      }
      catch(err){
          return '';
      }
  }
}