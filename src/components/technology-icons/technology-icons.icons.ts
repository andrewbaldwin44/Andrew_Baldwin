import CssSvg from 'images/css3.svg';
import DjangoSvg from 'images/django.svg';
import FaunadbSvg from 'images/faunadb.svg';
import FirebaseSvg from 'images/firebase.svg';
import GitSvg from 'images/git.svg';
import GraphqlSvg from 'images/graphql.svg';
import HerokuSvg from 'images/heroku.svg';
import HtmlSvg from 'images/html5.svg';
import JavaScriptSvg from 'images/javascript.svg';
import MongodbSvg from 'images/mongodb.svg';
import MySqlSvg from 'images/mysql.svg';
import NextjsSvg from 'images/next-dot-js.svg';
import NodejsSvg from 'images/node-dot-js.svg';
import PostgreSqlSvg from 'images/postgresql.svg';
import PythonSvg from 'images/python.svg';
import ReactSvg from 'images/react.svg';
import ReduxSvg from 'images/redux.svg';
import RubySvg from 'images/ruby.svg';
import RubyOnRailsSvg from 'images/rubyonrails.svg';
import SocketIoSvg from 'images/socket-dot-io.svg';
import SqliteSvg from 'images/sqlite.svg';
import TypeScriptSvg from 'images/typescript.svg';
import VercelSvg from 'images/vercel.svg';

export interface ITechnologyIcon {
  alt: string;
  icon: string;
}

export const TECHNOLOGY_ICONS: ITechnologyIcon[] = [
  { alt: 'CSS Icon', icon: CssSvg },
  { alt: 'Django Icon', icon: DjangoSvg },
  { alt: 'Fauna Icon', icon: FaunadbSvg },
  { alt: 'Firebase Icon', icon: FirebaseSvg },
  { alt: 'Git Icon', icon: GitSvg },
  { alt: 'Graphql Icon', icon: GraphqlSvg },
  { alt: 'Heroku Icon', icon: HerokuSvg },
  { alt: 'HTML Icon', icon: HtmlSvg },
  { alt: 'JavaScript Icon', icon: JavaScriptSvg },
  { alt: 'MongoDB Icon', icon: MongodbSvg },
  { alt: 'My SQL Icon', icon: MySqlSvg },
  { alt: 'Next.js Icon', icon: NextjsSvg },
  { alt: 'Node.js Icon', icon: NodejsSvg },
  { alt: 'Postgres SQL Icon', icon: PostgreSqlSvg },
  { alt: 'Python Icon', icon: PythonSvg },
  { alt: 'React Icon', icon: ReactSvg },
  { alt: 'Redux Icon', icon: ReduxSvg },
  { alt: 'Ruby Icon', icon: RubySvg },
  { alt: 'Ruby On Rails Icon', icon: RubyOnRailsSvg },
  { alt: 'Socket.io Icon', icon: SocketIoSvg },
  { alt: 'SQL Lite Icon', icon: SqliteSvg },
  { alt: 'TypeScript Icon', icon: TypeScriptSvg },
  { alt: 'Vercel Icon', icon: VercelSvg },
];
