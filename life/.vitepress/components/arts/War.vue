<template>
  <div class="war-container">
    <!-- 第一次世界大战部分 -->
    <section class="war-section">
      <div class="section-title">
        <h2 class="title-main">{{ ww1.name }}</h2>
        <div class="title-decoration"></div>
      </div>

      <div class="timeline">
        <div v-for="(value, key, index) in ww1.info" :key="key" class="timeline-item"
          :class="{ 'timeline-item--left': index % 2 === 0, 'timeline-item--right': index % 2 === 1 }">
          <div class="timeline-content">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="event-title">
                <h3 class="title-sub">{{ value.name }}</h3>
                <div class="title-sub-decoration"></div>
              </div>
              <div class="timeline-date">
                <i class="icon-calendar"></i>
                {{ formatDate(value.date) }}
              </div>
              <div class="timeline-excerpt">
                {{ value.intro }}
                <span v-if="value.after" class="additional-info"> {{ value.after }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 马岛战争部分 -->
    <section class="war-section">
      <div class="war-header">
        <div class="section-title">
          <h2 class="title-main">{{ falklands_war.zh.name }}</h2>
          <div class="title-decoration"></div>
        </div>
        <a :href="falklands_war.zh.url" class="wiki-link" target="_blank">
          <i class="icon-external"></i> Wikipedia
        </a>
      </div>

      <div class="war-content">
        <div class="war-image">
          <img :src="falklands_war.zh.img" :alt="falklands_war.zh.name" />
        </div>

        <div class="war-text">
          <p v-for="(item, index) in falklands_war.zh.info" :key="index" class="war-paragraph">
            {{ item }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import data from '../../data/war.json';

const ww1 = data.world_war_1;
const falklands_war = data.falklands_war;

// 日期格式化函数
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 滚动动画
const animateOnScroll = () => {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => observer.observe(item));
};

onMounted(() => {
  animateOnScroll();
});
</script>

<style scoped>
.war-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.war-section {
  margin-bottom: 4rem;
}

/* 标题样式 */
.section-title {
  margin-bottom: 2.5rem;
  text-align: center;
}

.title-main {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  position: relative;
  display: inline-block;
}

.title-main::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.title-decoration {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #bdc3c7, transparent);
  margin: 1.5rem auto 0;
}

.event-title {
  margin-bottom: 1rem;
}

.title-sub {
  font-size: 1.4rem;
  font-weight: 600;
  color: #34495e;
  margin: 0 0 0.5rem 0;
  position: relative;
  display: inline-block;
}

.title-sub::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  bottom: -6px;
  left: 0;
  border-radius: 2px;
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
  transform: translateX(-50%);
}

.timeline-item {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.timeline-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.timeline-content {
  display: flex;
  align-items: center;
  position: relative;
}

.timeline-item--left .timeline-content {
  flex-direction: row-reverse;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #667eea;
  z-index: 1;
  flex-shrink: 0;
}

.timeline-card {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  flex: 1;
  max-width: 400px;
}

.timeline-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.timeline-date {
  display: flex;
  align-items: center;
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.icon-calendar {
  margin-right: 0.5rem;
}

.timeline-excerpt {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.additional-info {
  display: block;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f0f0f0;
  color: #888;
  font-style: italic;
}

/* 马岛战争部分样式 */
.war-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.wiki-link {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #667eea;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.wiki-link:hover {
  background: #667eea;
  color: white;
}

.icon-external {
  margin-right: 0.5rem;
}

.war-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  align-items: start;
}

.war-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.war-text {
  line-height: 1.8;
}

.war-paragraph {
  margin-bottom: 1.5rem;
  color: #444;
  text-align: justify;
}

/* 响应式设计 */
@media only screen and (max-width: 768px) {
  .war-container {
    padding: 1rem;
  }

  .title-main {
    font-size: 2rem;
  }

  .title-sub {
    font-size: 1.2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item--left .timeline-content,
  .timeline-item--right .timeline-content {
    flex-direction: row;
  }

  .timeline-content {
    margin-left: 40px;
  }

  .timeline-dot {
    position: absolute;
    left: -46px;
  }

  .timeline-card {
    margin: 0;
    max-width: none;
  }

  .war-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .war-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .war-image {
    order: -1;
  }
}

@media only screen and (max-width: 480px) {
  .title-main {
    font-size: 1.8rem;
  }

  .title-sub {
    font-size: 1.1rem;
  }

  .timeline-card {
    padding: 1rem;
  }

  .timeline-excerpt {
    font-size: 0.9rem;
  }
}

/* 图标样式（使用伪元素） */
.icon-calendar::before {
  content: '📅';
}

.icon-external::before {
  content: '🔗';
}
</style>
