export default function MetricsCard({ data }) {
  return (
    <div>
      <p>Subscribers: {data.subscriberCount}</p>
      <p>Views: {data.viewCount}</p>
      <p>Videos: {data.videoCount}</p>
    </div>
  );
}
