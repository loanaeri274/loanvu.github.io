(() => {
  // Version A only. Version B will be a separate deployment.
  const STATS = "study4_ab_demo_stats";
  const stats = JSON.parse(localStorage.getItem(STATS) || '{"A":{"views":0,"clicks":0},"B":{"views":0,"clicks":0}}');
  stats.A.views += 1;
  localStorage.setItem(STATS, JSON.stringify(stats));
  document.getElementById("variantLabel").textContent = "Version A";
  function recordClick() {
    const current = JSON.parse(localStorage.getItem(STATS) || '{"A":{"views":0,"clicks":0},"B":{"views":0,"clicks":0}}');
    current.A.clicks += 1;
    localStorage.setItem(STATS, JSON.stringify(current));
  }
  document.getElementById("heroCta").addEventListener("click", recordClick);
  document.querySelectorAll(".enroll").forEach(btn => btn.addEventListener("click", () => {
    recordClick();
    alert("감사합니다! Version A 테스트 페이지입니다. 실제 결제는 진행되지 않습니다.");
  }));
})();