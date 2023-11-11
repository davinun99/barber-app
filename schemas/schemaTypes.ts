import blockContent from "./documents/blockContent";
import country from "./documents/country";
import catalog from "./documents/catalog";
import size from "./documents/size";
import taxon from "./documents/taxon";
import taxonomy from "./documents/taxonomy";
import variant from "./documents/variant";
import productImage from "./documents/productImage";
import product from "./documents/product";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeSlug from "./locale/Slug";
import localeBlockContent from "./locale/BlockContent";
import turno from "./turno";
import cliente from "./cliente";
import reserva from "./reserva";

const types = [
  turno,
  cliente,
  reserva,
  blockContent,
  country,
  catalog,
  size,
  taxon,
  taxonomy,
  variant,
  productImage,
  product,
  localeString,
  localeText,
  localeSlug,
  localeBlockContent
];

export default types;