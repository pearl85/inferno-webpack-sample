import Inferno from 'inferno';
import Component from 'inferno-component';



class FilmListCom extends Component {
    constructor() {
        super();
        this.state = {
            jsondata: {}
        };
    }

    componentDidMount() {
        var _this = this;
        var d = new Date();
        var n = d.getTime();

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var bs = JSON.parse(xhttp.responseText);
                _this.setState({
                    jsondata: bs
                });
            }
        };
        xhttp.open("GET", "http://swapi.co/api/films/?" + n, true);
        xhttp.send();
    }
    render() {

            return (< div >

                {
                    this.state.jsondata.results ? this.state.jsondata.results.map((fl, i) => < TableRow key = { i }
                        data = { fl }
                        />):''} < /div>
                    );
                }
            }


          class TableRow extends Component {
              render() {
                  return ( 

        <div class="row yelloColor">
            <div class="col-sm-4">
                {this.props.data.title}
            </div>
            <div class="col-sm-4">
                {this.props.data.director}
            </div>
            <div class="col-sm-4">
                {this.props.data.release_date}
            </div>
        </div>
      






                  );
              }
          }

          export default FilmListCom;
