from flask_restful import Api , Resource , reqparse
from flask_cors import CORS, cross_origin
from flask import Flask , jsonify
from scraper import get_items

app = Flask("__main__")

CORS(app, support_credentials=True)

@cross_origin(supports_credentials=True)
def login():
  return jsonify({'success': 'ok'})

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('search')


class GetItems(Resource):
    def post(self):
        search = parser.parse_args()
        data = get_items(search['search'])
        return jsonify({'data': data})

api.add_resource(GetItems,'/api/items')

if __name__ == "__main__":
    app.run(debug=True,port=3001)