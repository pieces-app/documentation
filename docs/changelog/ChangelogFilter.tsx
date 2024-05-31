import changelog from './changelog.json';
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

type Product = typeof changelog.products[number];

type Release = {
  title: string
  description: string
  products: Product[]
  body: string
  referencePath: string
}

const ChangelogFilter = () => {
  const [productTypeFilter, setProductTypeFilter] = useState<Product>('All');
  const [products, setProducts] = useState<Product[]>(['All', ...changelog.products] as Product[]);
  const [releases, setReleases] = useState<Release[]>(changelog.releases as Release[]);
  const [filteredReleases, setFilteredReleases] = useState<Release[]>(changelog.releases as Release[]);

  useEffect(() => {
    setProducts(['All', ...changelog.products] as Product[]);
    setReleases(changelog.releases as Release[]);
    setFilteredReleases(changelog.releases as Release[]);
  }, []);

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  useEffect(() => {
    const filteredEvents = releases.filter(release => {
      if (productTypeFilter.toLowerCase() === 'all') {
        return true;
      }

      return release.products.includes(productTypeFilter);
    })

    setFilteredReleases(filteredEvents);
  }, [productTypeFilter])

  return (
    <div>
      <div className="category-filters">
        {products.map((product, index) => (
          <span
            key={index}
            className={`category ${productTypeFilter.includes(product) ? 'active' : ''}`}
            onClick={() => setProductTypeFilter(product as Product)}
          >
            {product}
          </span>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {filteredReleases.map((release, index) => (
          <div
            key={index}
            className="changelog-item"
          >
              <h2 style={{
                marginTop: '16px',
                marginBottom: '8px'
              }}>
                <a id={slugify(release.title)} href={`/changelog/${release.referencePath}`}>
                  <strong>{release.title}</strong>
                </a>
              </h2>
              <ReactMarkdown>
                {release.body}
              </ReactMarkdown>
          </div>
          ))}
      </div>
    </div>
  );
};

export default ChangelogFilter;
